function track(id) {
  // console.log('tracking begins right here');
  const body = document.getElementById(id);
  addEventListener('click', (e) => {
    // console.log(e.target.tagName);
    // console.log('clicked :' + e.target.innerText);
    if (e.target.tagName == 'BUTTON') {
      console.log('button clicked: ' + e.target.innerText);
      console.log('at: ' + window.location.pathname);
    }
  });
  function fireRouteChange(route) {
    console.log('route changed');
    console.log('at: ' + route);
  }
  function trackRoute() {
    ['pushState', 'replaceState'].forEach((method) => {
      const original = history[method];
      history[method] = function () {
        fireRouteChange(window.location.pathname);
        return original.apply(this, arguments);
      };
    });
  }

  trackRoute();
}
export default { track };
