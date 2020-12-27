// API Library
const HOST = 'server.com/';

const getCategories = (data) => {
  if (data.category === 'top') {
    return [
      'Server Catnip',
      'Server Cat Food',
      'Server Groomer',
      'Server Costumes',
    ];
  }
  if (data.category == 'additional') {
    return [
      'Server Toys',
      'Server Cat Perch',
      'Server Cat Towers',
      'Server Water Fountain',
    ];
  }
  return [];
};

const endpoints = {
  '/categories': {
    get: getCategories,
  },
};

const api = {
  get: (url, data, callback) => {
    const domain = url.substring(0, url.indexOf('/'));
    const endpoint = url.substring(url.indexOf('/'), url.length);
    console.log(endpoint);
    callback(endpoints[endpoint]['get'](data));
  },
};

// Render Data onto the sub menu
const populateCategories = (category) => {
  api.get(HOST + 'categories', { category }, (categories) => {
    let newCategories = '';
    for (const category of categories) {
      const categoryElement = `
        <li class="menu__sub__categories__item">
          <a href="#" class="menu__sub__categories__item__link">${category}</a>
        </li>
      `;
      newCategories += categoryElement;
    }
    const categoriesElement = document.querySelector(
      `.menu__sub__categories__items--${category}`
    );
    categoriesElement.innerHTML = newCategories;
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

    populateCategories('top');
    populateCategories('additional');
  });
});

navBar.addEventListener('mouseleave', () => {
  subMenu.style.display = 'none';
});
