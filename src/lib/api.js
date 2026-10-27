import { BASE_URL, API_KEY } from "./constants";

export async function apiRequest(
  endpoint,
  { method = "GET", body, token } = {},
) {
  const headers = {
    "content-type": "application/json",
  };
  if (API_KEY) headers["X-Noroff-API-key"] = API_KEY;
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 204) return null;

  const json = await response.json();

  if (!response.ok) {
    const errorMessage = json?.errors?.[0]?.message ?? "Something went wrong";
    throw new Error(errorMessage);
  }

  return json;
}
