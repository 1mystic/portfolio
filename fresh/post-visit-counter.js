(async () => {

    try {

        const counter = document.getElementById("readCounter");

        if (!counter) return;

        const slug = location.pathname.split("/").pop().replace(".html", "");

        const res = await fetch(`/api/visit?slug=${encodeURIComponent(slug)}`);

        const data = await res.json();

        counter.textContent = `${data.visits.toLocaleString()} READS`;

    }
    catch (err) {

        console.error(err);

    }

})();
