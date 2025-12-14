export default async function fetchAPI(path, method = 'GET', body = null) {
  // const data = await fetch(`https://teacupnet-backend.vercel.app/${path}`, {
  const data = await fetch(`http://localhost:3000/${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    method: method,
  });
  // console.log(data);
  return await data.json();
}
