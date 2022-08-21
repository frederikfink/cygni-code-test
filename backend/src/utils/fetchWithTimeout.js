import fetch from 'node-fetch';

export const fetchWithTimeout = (url, options) => new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject('timeout'), 1000);

  return fetch(url)
    .then(response => {
      clearTimeout(timeout);

      if (response.status === 200) {
        return resolve(response);
      }

      return reject(response);
    }, rejectReason => {
      clearTimeout(timeout);

      return reject(rejectReason);
    });
});

export default fetchWithTimeout;