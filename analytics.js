/* ============================================================
   Google Analytics (GA4) — configuración central
   Reemplaza G-XXXXXXXXXX por tu ID de medición de Analytics
   (Admin → Flujos de datos → tu web → "ID de medición").
   Con esto, todas las páginas quedan medidas y el seguimiento
   se mantiene cada vez que vuelves a publicar el sitio.
   ============================================================ */
(function () {
  var GA_ID = "G-RH1Q2JB48D";
  if (!GA_ID || GA_ID.indexOf("XXX") !== -1) return; // sin ID válido, no hace nada

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", GA_ID);
})();
