// Cloudflare Pages Function — GET/POST /api/visit
// Site-wide counter (no slug) + per-post counter (?slug=<name>).
//
// Read vs. increment are separated on purpose:
//   GET  /api/visit?slug=x   -> read-only, never increments
//   POST /api/visit?slug=x   -> increments once, returns new total
// (GET with ?hit=1 also increments, for clients that can't POST.)
//
// Requires a Pages KV binding named COUNTER (dashboard:
// Pages project -> Settings -> Bindings -> Add KV namespace as COUNTER).
// Without the binding it answers 501 + { fallback: true } so the
// frontend scripts transparently fall back to the public counter.

function normalizeSlug(raw) {
  if (!raw) return "";
  return String(raw)
    .trim()
    .toLowerCase()
    .split("/")
    .pop()
    .replace(/\.html?$/i, "")
    .replace(/[^a-z0-9-_]/g, "")
    .slice(0, 80);
}

export async function onRequest(context) {
  const headers = {
    "content-type": "application/json",
    "cache-control": "no-store",
  };

  try {
    const url = new URL(context.request.url);
    const slug = normalizeSlug(url.searchParams.get("slug"));
    const key = slug ? `post:${slug}` : "site";

    const kv = context.env && context.env.COUNTER;
    if (!kv) {
      return new Response(
        JSON.stringify({ visits: null, slug: slug || null, fallback: true }),
        { status: 501, headers }
      );
    }

    const isHit =
      context.request.method === "POST" ||
      url.searchParams.get("hit") === "1";

    let count = Number((await kv.get(key)) || "0");
    if (!Number.isFinite(count) || count < 0) count = 0;

    if (isHit) {
      count += 1;
      await kv.put(key, String(count));
    }

    return new Response(
      JSON.stringify({ visits: count, slug: slug || null }),
      { headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ visits: null, fallback: true }),
      { status: 500, headers }
    );
  }
}
