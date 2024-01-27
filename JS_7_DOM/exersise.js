// * Реалізуй пошук автомобілів по сайту

// * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)

// * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/
// PkkZZRy_ggtT) * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

const cars = [
  {
    id: 1,
    car: 'Audi',
    type: 'A6',
    price: 30000,
    img: (src = './img/audi.png'),
  },
  {
    id: 2,
    car: 'BMW',
    type: 'X5',
    price: 35000,
    img: (src = './img/bmw.png'),
  },
  {
    id: 3,
    car: 'Wolkswagen',
    type: 'Golf',
    price: 25000,
    img: (src = './img/wolkswagen.png'),
  },
  {
    id: 4,
    car: 'Renault',
    type: 'Clio',
    price: 20000,
    img: (src = './img/renault.png'),
  },
];

const elements = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-list'),
};

// renderCars повертає і додає всі тачки, з масиву cars в html
function renderCars(cars) {
  let html = '';
  for (let car of cars) {
    html += `<li>
      <span>${car.car}</span>
      <span>${car.type}</span>
      <span>${car.price}</span>
      <img src="${car.img}" alt="image" />
    </li>`;
  }
  elements.container.innerHTML = html;
}

function formHandler(event) {
  event.preventDefault();
  const query = event.target.query.value;
  const option = event.target.options.value;

  const newCars = cars.filter(car => {
    return car[option].toLowerCase().includes(query.toLowerCase());
  });
  renderCars(newCars);
}

elements.form.addEventListener('submit', formHandler);
