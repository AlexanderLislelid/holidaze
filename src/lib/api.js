import { BASE_URL, API_KEY } from "./constants";

/**
 * Makes a request to the Noroff API.
 *
 * @param {string} endpoint - The endpoint, e.g. "holidaze/venues"
 * @param {Object} [options]
 * @param {string} [options.method] - GET, POST, PUT or DELETE (default GET)
 * @param {Object} [options.body] - Data to send
 * @param {string} [options.token] - Access token if logged in
 * @returns {Promise<Object|null>} The response data, or null if empty
 *
 * @example
 * // Get all venues
 * const { data } = await apiRequest("holidaze/venues");
 *
 * // Log in
 * const { data } = await apiRequest("auth/login", {
 *   method: "POST",
 *   body: { email, password },
 * });
 */

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
