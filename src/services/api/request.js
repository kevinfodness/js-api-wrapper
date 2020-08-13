import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';
import { REST_BASE } from '../../config/api';

// Polyfill ES6 promises.
polyfill();

/**
 * Performs a request against the API.
 *
 * @param {string} endpoint - The endpoint to request as a relative URL.
 * @param method
 * @param data
 * @returns {boolean}
 */
export default async (endpoint, method, data = null) => {
  const init = { method };

  // If there is data, add it to the init object.
  if (data !== null) {
    init.body = JSON.stringify(data);
  }

  // TODO: Error handling.

  return await (await fetch(`${REST_BASE}${endpoint}`, init)).json();
};
