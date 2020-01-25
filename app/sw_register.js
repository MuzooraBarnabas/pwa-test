// if ("serviceWorker" in navigator) {
//  navigator.serviceWorker.register("./sw.js")         
//    .then(function (registration) {
//      console.log("Service Worker registered with scope:", registration.scope);
//    })
//    .catch(function (err) {
//      console.log("Service worker registration failed:", err);     
//    }); 
// } 


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}
