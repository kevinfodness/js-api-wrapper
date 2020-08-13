import request from './request';

/**
 * Performs a GET request against the API.
 *
 * @param {string} endpoint - The endpoint to request as a relative URL.
 * @returns {Promise} - A Promise on successful completion of the request that resolves to JSON.
 * @throws {object} - Throws an HTTP error if the response was not successful.
 */
export default (endpoint) => request(endpoint, 'GET');
