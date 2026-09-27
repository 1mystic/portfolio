// Cloudflare Pages Function — GET /api/reads?slugs=a,b,c
// Batch read-only endpoint for blog.html cards. Never increments.
// Returns { counts: { <slug>: <number> } }.
// 501 + { fallback: true } when the COUNTER KV binding is missing,
// so the frontend can fall back to the public counter service.

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
    const slugs = String(url.searchParams.get("slugs") || "")
      .split(",")
      .map(normalizeSlug)
      .filter(Boolean)
      .slice(0, 50);

    const kv = context.env && context.env.COUNTER;
    if (!kv) {
      return new Response(
        JSON.stringify({ counts: {}, fallback: true }),
        { status: 501, headers }
      );
    }

    const counts = {};
    await Promise.all(
      slugs.map(async (slug) => {
        const n = Number((await kv.get(`post:${slug}`)) || "0");
        counts[slug] = Number.isFinite(n) && n >= 0 ? n : 0;
      })
    );

    return new Response(JSON.stringify({ counts }), { headers });
  } catch (err) {
    return new Response(
      JSON.stringify({ counts: {}, fallback: true }),
      { status: 500, headers }
    );
  }
}
