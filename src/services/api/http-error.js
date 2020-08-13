/**
 * Defines an exception to be used when an HTTP error is encountered.
 *
 * @param {string} message - The human-readable error message.
 * @param {object} data - Optional. Data associated with the error.
 * @returns {object} - An object containing a message and optional data.
 */
export default (message, data = {}) => ({ message, data });
