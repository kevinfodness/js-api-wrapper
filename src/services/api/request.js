import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';
import { REST_BASE } from '../../config/api';
import httpError from './http-error';

// Polyfill ES6 promises.
polyfill();

/**
 * Performs a request against the API.
 *
 * @param {string} endpoint - The endpoint to request as a relative URL.
 * @param {string} method - The HTTP verb to use, e.g., 'GET' or 'POST'.
 * @param {array|object|null} data - Optional. Data to send along with the request.
 * @returns {Promise} - A Promise on successful completion of the request that resolves to JSON.
 * @throws {object} - Throws an HTTP error if the response was not successful.
 */
export default async (endpoint, method, data = null) => {
  const init = { method };

  // If there is data, add it to the init object.
  if (data !== null) {
    init.body = JSON.stringify(data);
  }

  // Try to get the data.
  const response = await fetch(`${REST_BASE}${endpoint}`, init);
  if (response.ok !== true) {
    throw httpError(response.statusText, response);
  }

  return await response.json();
};
