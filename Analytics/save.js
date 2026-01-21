import fetchAPI from '../Functions/FetchAPI';
import fingerprint from './identity';
import data from './data.controller';
import { initial } from '..';

export default function save() {
  setInterval(() => {
    const newData = data.getNewData();

    // Check if there's any new data to send
    const hasNewData =
      newData.button.length > 0 ||
      newData.form.length > 0 ||
      newData.page.length > 0;

    if (hasNewData) {
      fetchAPI('api/analytics', 'POST', {
        data: newData,
        fingerprint: fingerprint(),
        initial: initial,
      });

      // Clear data after sending
      data.clearData();
    }
  }, 5000);
}
