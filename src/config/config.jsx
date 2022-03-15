const BASE_API_URL = "https://api.tvmaze.com";

export async function apiGet(query) {
  const response = await fetch(`${BASE_API_URL}${query}`).then((r) =>
    r.json()
  );
  return response;
}
