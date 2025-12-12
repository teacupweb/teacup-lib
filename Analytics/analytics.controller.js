import trackClicks from './services/click.service';
import page from './services/page.service';
import forms from './services/forms.service';
import fingerprint from './fingerprint';
function track() {
  console.log(fingerprint());
  // console.log('tracking begins right here');
  // const body = document.getElementById(id);

  //clicks
  trackClicks();
  //pages
  page.trackRoute();
  page.trackPageView();

  // forms
  forms.trackForms();
}
export default { track };
