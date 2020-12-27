const HOST = 'server.com/';

const endpoints = {
  '/': {
    get: 'Hello World!',
  },
};

const api = {
  get: (url, data, callback) => {
    const domain = url.substring(0, url.indexOf('/'));
    const endpoint = url.substring(url.indexOf('/'), url.length);

    callback(endpoints[endpoint]['get']);
  },
};

document.onclick = function () {
  api.get(HOST, {}, (response) => {
    document.body.innerHTML += response;
  });
};
