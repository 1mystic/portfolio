# Mermaid diagrams in blog posts — reusable setup

Internal reference doc, not a published post. Copy this boilerplate into any
new `fresh/posts/*.html` page that needs Mermaid diagrams instead of
re-deriving it. Built and debugged on [`reflecta.html`](reflecta.html) — read
that file for a live example of every pattern below.

## 1. The CDN link (this is the part that silently breaks)

Use the **ESM** build, and note the file extension is `.mjs`, not `.js`:

```html
<script type="module">
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
</script>
```

`mermaid.esm.min.js` (with a `.js` extension) **404s on jsDelivr**. This cost
a full debugging round trip the first time — check the URL resolves
(`curl -s -o /dev/null -w "%{http_code}\n" <url>` should print `200`) before
assuming the integration code is wrong.

## 2. Diagram authoring rule: never leave a raw `<` or `>` in a node label

Write diagrams straight inside `<pre class="mermaid">...</pre>` in the HTML
source. The browser HTML-decodes entities in that text before Mermaid ever
sees it, so:

- To force a line break inside a node label, write `&lt;br/&gt;` in the HTML
  source. It decodes to a literal `<br/>`, which Mermaid's `htmlLabels: true`
  renders as an actual line break. This is intentional and works.
- **Never** write a bare `<` or `>` as page content inside a label (e.g. a
  subscript like `x_<t`). Even quoted, a lone `<` breaks Mermaid's flowchart
  parser and **silently kills that one diagram** — no console error surfaces
  by default, the `<pre>` just renders empty. Reword instead: `x_<t` →
  `"x before t"`.
- Arrows/operators that are part of Mermaid's own syntax (`-->`, `<-->`,
  `-.->`, `A & B --> C`) are fine as literal characters outside of quoted
  labels — don't HTML-escape those, only escape characters that need to
  survive as literal text *inside* a label.

If a diagram ever renders as an empty box with no error: grep the diagram's
source for a stray `&lt;` that isn't part of `&lt;br/&gt;` — that's almost
always the cause.

## 3. Head `<style>` block (copy verbatim)

```html
<style>
    .blog-article pre.mermaid {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: auto;
        padding: 1.75rem 1.25rem;
    }

    .blog-article pre.mermaid svg {
        max-width: none !important;
        width: auto !important;
        height: auto !important;
    }

    @media (max-width: 640px) {
        .blog-article pre.mermaid {
            padding: 1.25rem 0.75rem;
        }
    }

    .mermaid-expand-btn {
        position: absolute;
        top: 0.6rem;
        right: 0.6rem;
        width: 2.1rem;
        height: 2.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #ddd;
        background: #fff;
        color: #333;
        cursor: pointer;
        opacity: 0.85;
        transition: opacity 0.15s ease, transform 0.15s ease;
        z-index: 2;
    }

    .mermaid-expand-btn:hover {
        opacity: 1;
        transform: scale(1.06);
    }

    .mermaid-expand-btn .material-symbols-outlined {
        font-size: 1.1rem;
    }

    body.dark-mode .mermaid-expand-btn {
        background: #222;
        border-color: #444;
        color: #eee;
    }

    .mermaid-modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.78);
        z-index: 9999;
        padding: 3rem 1.5rem;
        align-items: center;
        justify-content: center;
    }

    .mermaid-modal-overlay.active {
        display: flex;
    }

    .mermaid-modal-content {
        position: relative;
        background: #fff;
        border-radius: 8px;
        padding: 2rem;
        max-width: 95vw;
        max-height: 90vh;
        overflow: auto;
    }

    body.dark-mode .mermaid-modal-content {
        background: #181818;
    }

    .mermaid-modal-content svg {
        width: auto !important;
        height: auto !important;
        max-width: none !important;
    }

    .mermaid-modal-close {
        position: fixed;
        top: 1.5rem;
        right: 1.75rem;
        width: 2.25rem;
        height: 2.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #ddd;
        background: #fff;
        color: #333;
        cursor: pointer;
        z-index: 10001;
    }

    body.dark-mode .mermaid-modal-close {
        background: #222;
        border-color: #444;
        color: #eee;
    }
</style>
```

**Why `useMaxWidth: false` + `width/height: auto !important` on the SVG
(§4 below covers the JS side too):** Mermaid's default `useMaxWidth: true`
force-shrinks any diagram wider than its container down to fit — which
squashes the text on dense diagrams (architecture / sequence diagrams) into
illegibility. Disabling it lets diagrams render at their true native size;
`overflow-x: auto` on `pre.mermaid` lets wide ones scroll horizontally
instead of shrinking. Small diagrams stay readable because font/spacing is
bumped in the JS config (§4), not because they're stretched to fill the
container.

**Why the close button is `position: fixed`, not `absolute`:** it used to
live inside the same scrollable `.mermaid-modal-content` box as the SVG, so
it scrolled away with wide diagrams. `position: fixed` pins it to the
viewport corner regardless of how far the diagram is scrolled.

## 4. Body script block (copy verbatim, right before `</body>`)

```html
<script src="../script.js"></script>
<script src="../post-visit-counter.js"></script>
<script type="module">
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

    // Save each diagram's raw source before mermaid ever touches the DOM,
    // so it can be re-parsed from scratch when the theme changes.
    const diagramSources = new Map();
    document.querySelectorAll("pre.mermaid").forEach((pre) => {
        diagramSources.set(pre, pre.textContent);
    });

    const getTheme = () => (localStorage.getItem("theme") === "dark" ? "dark" : "neutral");

    function configure(theme) {
        mermaid.initialize({
            startOnLoad: false,
            theme,
            themeVariables: { fontSize: "18px" },
            flowchart: {
                useMaxWidth: false,
                htmlLabels: true,
                curve: "basis",
                nodeSpacing: 55,
                rankSpacing: 70,
                padding: 18
            },
            sequence: {
                useMaxWidth: false,
                diagramMarginX: 40,
                diagramMarginY: 20,
                actorMargin: 70,
                boxMargin: 12,
                boxTextMargin: 8,
                noteMargin: 12,
                messageMargin: 50,
                mirrorActors: false
            }
        });
    }

    // Modal is built once and reused for every diagram.
    const overlay = document.createElement("div");
    overlay.className = "mermaid-modal-overlay";
    overlay.innerHTML = `
        <button class="mermaid-modal-close" aria-label="Close">
            <span class="material-symbols-outlined">close</span>
        </button>
        <div class="mermaid-modal-content">
            <div class="mermaid-modal-svg-holder"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const svgHolder = overlay.querySelector(".mermaid-modal-svg-holder");
    const closeModal = () => {
        overlay.classList.remove("active");
        svgHolder.innerHTML = "";
    };
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });
    overlay.querySelector(".mermaid-modal-close").addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    function attachExpandButtons() {
        document.querySelectorAll("pre.mermaid").forEach((pre) => {
            const existingBtn = pre.querySelector(".mermaid-expand-btn");
            if (existingBtn) existingBtn.remove();

            if (!pre.querySelector("svg")) return;

            const btn = document.createElement("button");
            btn.className = "mermaid-expand-btn";
            btn.setAttribute("aria-label", "Expand diagram");
            btn.innerHTML = `<span class="material-symbols-outlined">open_in_full</span>`;
            btn.addEventListener("click", () => {
                const currentSvg = pre.querySelector("svg");
                if (!currentSvg) return;
                svgHolder.innerHTML = "";
                svgHolder.appendChild(currentSvg.cloneNode(true));
                overlay.classList.add("active");
            });
            pre.appendChild(btn);
        });
    }

    async function renderDiagrams() {
        configure(getTheme());
        diagramSources.forEach((code, pre) => {
            pre.removeAttribute("data-processed");
            pre.innerHTML = code;
        });
        try {
            await mermaid.run({ querySelector: "pre.mermaid", suppressErrors: true });
        } catch (err) {
            // A single malformed diagram must not take down every other
            // diagram's expand button - log it and keep going.
            console.error("Mermaid render error:", err);
        } finally {
            attachExpandButtons();
        }
    }

    renderDiagrams();

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        // script.js sets body.dark-mode + localStorage on this same click event;
        // defer so getTheme() reads the updated value.
        themeToggle.addEventListener("click", () => setTimeout(renderDiagrams, 0));
    }
</script>
```

**Why `renderDiagrams()` is wrapped in `try/catch/finally`:** `mermaid.run()`
processes every `pre.mermaid` on the page in one batched call. If any single
diagram throws during parsing, the whole `await` rejects — which, without the
`finally`, means `attachExpandButtons()` never runs for **any** diagram on
the page, not just the broken one. The `finally` guarantees buttons get
attached to whatever did render, regardless of failures elsewhere.

**Why theme is read from `localStorage`, not `body.classList`:** the
site's dark-mode class is added by `script.js` inside a `DOMContentLoaded`
handler. `type="module"` scripts execute *before* `DOMContentLoaded` fires,
so checking `document.body.classList.contains("dark-mode")` at that point is
a race — it reads `false` even when dark mode is the saved preference.
Reading `localStorage.getItem("theme")` directly sidesteps the race
entirely, since it's the same source `script.js` itself writes to.

**Why `renderDiagrams()` re-runs (not just re-styles) on theme toggle:**
Mermaid bakes the theme into the rendered SVG at parse time — there's no way
to "restyle" an already-rendered diagram. So on toggle, the code restores
each `<pre>`'s original raw Mermaid source (saved in `diagramSources` before
the first render) and reparses from scratch with the new theme.

## 5. Checklist for a new post

1. Copy the `<style>` block into `<head>` (§3).
2. Write diagrams as `<pre class="mermaid">...</pre>` directly in the article
   body, following the escaping rule in §2.
3. Copy the script block right before `</body>`, after the existing
   `script.js` / `post-visit-counter.js` tags (§4).
4. Load the page, open dark mode, and click every expand button once —
   confirms rendering, theme sync, and the modal all work before publishing.
