// Per-post read counter for fresh/posts/*.html
// Primary backend: same-origin Cloudflare Pages Function (/api/visit?slug=).
// Fallback: public Abacus counter (CORS-enabled, no key needed).
// Counts once per browser session per post so reloads don't inflate reads.

(function () {
  var ABACUS_NS = "atharvk-pages-dev";
  var ABACUS = "https://abacus.jasoncameron.dev";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function num(v) {
    return typeof v === "number" && isFinite(v) && v >= 0 ? v : null;
  }

  function currentSlug() {
    return location.pathname
      .split("/")
      .pop()
      .replace(/\.html?$/i, "")
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, "")
      .slice(0, 80);
  }

  async function primary(slug, hit) {
    try {
      var res = await fetch(
        "/api/visit?slug=" + encodeURIComponent(slug),
        { method: hit ? "POST" : "GET", cache: "no-store" }
      );
      if (!res.ok) return null;
      var data = await res.json();
      return num(data && data.visits);
    } catch (e) {
      return null;
    }
  }

  async function abacus(slug, hit) {
    try {
      var res = await fetch(
        ABACUS + (hit ? "/hit/" : "/get/") + ABACUS_NS + "/post-" + slug,
        { cache: "no-store" }
      );
      if (!res.ok) return null;
      var data = await res.json();
      return num(data && data.value);
    } catch (e) {
      return null;
    }
  }

  ready(async function () {
    var counter = document.getElementById("readCounter");
    if (!counter) return;

    var slug = currentSlug();
    if (!slug) return;

    var flag = "read-hit:" + slug;
    var already = null;
    try {
      already = sessionStorage.getItem(flag);
    } catch (e) {}

    var reads = null;
    if (!already) {
      reads = await primary(slug, true);
      if (reads === null) reads = await abacus(slug, true);
      try {
        sessionStorage.setItem(flag, "1");
      } catch (e) {}
    } else {
      reads = await primary(slug, false);
      if (reads === null) reads = await abacus(slug, false);
    }

    counter.textContent =
      reads === null ? "-- reads" : reads.toLocaleString() + " READS";
  });
})();
