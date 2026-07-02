(async () => {

    try {

        const res = await fetch("/api/visit");

        const data = await res.json();

        const counter = document.getElementById("visitCounter");

        if(counter){

            counter.textContent =
                `VISITS ${data.visits.toLocaleString()}`;

        }

    }
    catch(err){

        console.error(err);

    }

})();