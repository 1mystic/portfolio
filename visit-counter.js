// Site-wide visit counter.
// Primary backend: same-origin Cloudflare Pages Function (/api/visit + KV).
// Fallback: public Abacus counter (CORS-enabled, no key needed), used when
// the Pages Function is unavailable (e.g. KV binding not set up yet,
// local preview, or non-Cloudflare hosting).
// Counts once per browser session so reloads don't inflate the total.

(function () {
  var ABACUS_NS = "atharvk-pages-dev";
  var ABACUS_KEY = "site-visits";
  var ABACUS = "https://abacus.jasoncameron.dev";
  var SESSION_FLAG = "site-visit-hit";

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

  async function primary(hit) {
    try {
      var res = await fetch("/api/visit", {
        method: hit ? "POST" : "GET",
        cache: "no-store",
      });
      if (!res.ok) return null;
      var data = await res.json();
      return num(data && data.visits);
    } catch (e) {
      return null;
    }
  }

  async function abacus(hit) {
    try {
      var res = await fetch(
        ABACUS + (hit ? "/hit/" : "/get/") + ABACUS_NS + "/" + ABACUS_KEY,
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
    var counter = document.getElementById("visitCounter");
    var already = null;
    try {
      already = sessionStorage.getItem(SESSION_FLAG);
    } catch (e) {}

    var visits = null;
    if (!already) {
      visits = await primary(true);
      if (visits === null) visits = await abacus(true);
      try {
        sessionStorage.setItem(SESSION_FLAG, "1");
      } catch (e) {}
    } else {
      visits = await primary(false);
      if (visits === null) visits = await abacus(false);
    }

    if (counter) {
      counter.textContent = visits === null ? "visits --" : "visits " + String(visits);
    }
  });
})();
