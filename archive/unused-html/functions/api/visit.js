export async function onRequest(context) {

    const kv = context.env.COUNTER;

    const url = new URL(context.request.url);
    const slug = url.searchParams.get("slug");

    const key = slug ? `post-visits:${slug}` : "site-visits";

    let count = Number(await kv.get(key) || "0");

    count++;

    await kv.put(key, String(count));

    return Response.json({
        visits: count
    });

}