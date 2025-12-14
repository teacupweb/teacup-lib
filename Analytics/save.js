import fetchAPI from '../Functions/FetchAPI';
import fingerprint from './fingerprint';
import data from './data.controller';
import { initial } from '..';
export default function save() {
  // const time = Date.now()
  setInterval(() => {
    fetchAPI('api/analytics', 'POST', {
      // time: time(),
      data: data.data,
      initial: initial,
      fingerprint: fingerprint(),
    });
  }, 5000);
}
// export default { save };
