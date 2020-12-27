// Server
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

// DOM handling
let activeMenuItem = null;

const navBar = document.getElementById('nav-bar');
const menuItems = document.querySelectorAll('.menu__item');
const subMenu = document.querySelector('.menu__sub');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseenter', () => {
    if (activeMenuItem) {
      activeMenuItem.classList.remove('menu__item--active');
    }
    activeMenuItem = menuItem;
    menuItem.classList.add('menu__item--active');
    subMenu.style.display = 'flex';
  });
});

navBar.addEventListener('mouseleave', () => {
  subMenu.style.display = 'none';
});
