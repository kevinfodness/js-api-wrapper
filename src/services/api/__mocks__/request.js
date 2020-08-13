import { polyfill } from 'es6-promise';
import httpError from '../http-error';

// Polyfill ES6 promises.
polyfill();

/**
 * Performs a mock request against the API.
 *
 * @param {string} endpoint - The endpoint to request as a relative URL.
 * @param {string} method - The HTTP verb to use, e.g., 'GET' or 'POST'.
 * @param {array|object|null} data - Optional. Data to send along with the request.
 * @returns {Promise} - A Promise on successful completion of the request that resolves to JSON.
 * @throws {object} - Throws an HTTP error if the response was not successful.
 */
export default async (endpoint, method, data = null) => {
  // If the endpoint is /path/does/not/exist, throw a 404 HTTP error.
  if (endpoint === '/path/does/not/exist') {
    throw httpError('Not Found', {
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });
  }

  // Mock for GET requests, but this can be modified to switch on the method for mocking other types of requests.
  return Promise.resolve([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
};
