/**
 * Store data to local storage when key is provided
 * @param {string} key - Local storage key which specifies where the data to be stored
 * @param {*} data - Data to store to local storage
 */
const setKey = (key, data) => {
  if (!key) { return; }
  window.localStorage.setItem(key, data);
};

/**
 * Get the data stored in specific key of local storage
 * @property {function()} localStorageUtils - Helpers for interacting with local storage
 * @param {string} key - Local storage key which specifies where the data to be stored
 * @returns {string} Data stored in `key` of local storage
 */
const getKey = (key) => window.localStorage.getItem(key);

/**
 * Remove the data stored in specific key of local storage
 * @param {string} key - Local storage key which specifies where the data to be stored
 */
const removeKey = (key) => {
  window.localStorage.removeItem(key);
};

/**
 * Clear all data stored in local storage
 */
const clearAll = () => {
  window.localStorage.clear();
};

export default {
  setKey,
  getKey,
  removeKey,
  clearAll
};
