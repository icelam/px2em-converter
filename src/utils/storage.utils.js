const setKey = (key, data) => {
  if (!key) { return; }
  window.localStorage.setItem(key, data);
};

const getKey = (key) => window.localStorage.getItem(key);

const removeKey = (key) => {
  window.localStorage.removeItem(key);
};

const clearAll = () => {
  window.localStorage.clear();
};

export default {
  setKey,
  getKey,
  removeKey,
  clearAll
};
