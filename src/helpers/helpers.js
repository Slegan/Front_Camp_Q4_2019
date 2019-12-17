export function requestAPI(url, type, data) {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  };

  if (type) options.method = type;
  if (data) options.body = JSON.stringify(data);

  return fetch(url, options)
    .then((res) => {
      if (res.ok) return res.json();

      return res.json()
        .then(error => Promise.reject(error));
    })
    .catch(error => Promise.reject(error && error.message || 'Unknown error'));
}


export function sortOrder(arr, filterBy) {
  return arr.sort((a, b) => {
    if (a[filterBy] > b[filterBy]) {
      return 1;
    }
    if (a[filterBy]< b[filterBy]) {
      return -1;
    }
    return 0;
  });
}
