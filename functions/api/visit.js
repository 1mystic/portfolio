export async function onRequest(context) {

    const kv = context.env.COUNTER;

    let count = Number(await kv.get("site-visits") || "0");

    count++;

    await kv.put("site-visits", String(count));

    return Response.json({
        visits: count
    });

}