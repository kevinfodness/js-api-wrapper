import get from './get';

/**
 * Gets the latest posts from the API.
 *
 * @returns {Promise} - A Promise on successful completion of the request that resolves to JSON.
 * @throws {object} - Throws an HTTP error if the response was not successful.
 */
export default () => get('/wp/v2/posts');
