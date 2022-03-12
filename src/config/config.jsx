const BASE_API_URL = "https://imdb-api.com/en/API";

export async function apiGet(query) {
  const response = await fetch(`${BASE_API_URL}${query}`).then((res) =>
    res.json()
  );
  return response;
}
