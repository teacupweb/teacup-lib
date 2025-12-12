import fetchAPI from '../Functions/FetchAPI';
import fingerprint from './fingerprint';
export default function save() {
  return fetchAPI(`api/analytics`, 'PUT', {
    data: data,
    fingerprint: fingerprint(),
  });
}
// export default { save };
