import clicks from './services/click.service';
import page from './services/page.service';
import forms from './services/forms.service';
import save from './save';
function track() {
  // console.log('tracking begins right here');
  // const body = document.getElementById(id);

  //clicks
  clicks.track();
  //pages
  // page.trackRoute();
  page.track();

  // forms
  forms.track();

  // save
  save();
}
export default { track };
