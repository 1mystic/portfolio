(async () => {
    const NAMESPACE = "atharvkpagedev";
    const KEY = "site-visits";

    try {

        await fetch(
            `https://api.countapi.xyz/create/${NAMESPACE}/${KEY}?value=0`
        );

        const res = await fetch(
            `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`
        );

        const data = await res.json();

        const el = document.getElementById("visitCounter");

        if (el) {
            el.textContent = `visits ${data.value.toLocaleString()}`;
        }

    } catch (e) {
        console.log(e);
    }

})();