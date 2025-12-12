const data = {
  button: [],
  form: [],
  page: [],
};
const setData = (type, data) => {
  data[type].push(data);
  return data;
};

export default { setData, data };
