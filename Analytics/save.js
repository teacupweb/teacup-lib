import fetchAPI from '../Functions/FetchAPI';
function save(type, data) {
  return fetchAPI(`api/analytics/${type}`, 'POST', {
    data: data,
  });
}
