import data from './../data.controller';

export default function trackClicks() {
  addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
      // console.log('button clicked: ' + e.target.innerText);
      // console.log('at: ' + window.location.pathname);
      // const button = `${e.target.innerText} at ${window.location.pathname}`;
      data.setData('button', {
        button: e.target.innerText,
        page: window.location.pathname,
      });
    }
  });
}
