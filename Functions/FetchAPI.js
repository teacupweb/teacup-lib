export default async function fetchAPI(path, method = 'GET', body = null) {
  const req = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  if (method === 'GET') delete req.body;

  try {
    const data = await fetch(
      // `https://backend.teacup.website/${path}`,
      `http://localhost:8000/${path}`,
      req,
    );
    return await data.json();
  } catch (error) {
    console.log(error);
  }
}
