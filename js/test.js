// const slug = function getExtremeElements(messages) {
//   // console.log(messages);
//   messages = messages.split(' ');
//   console.log(messages);
//   let longestWord = 7;
//   console.log(longestWord);
//   for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i]);
//   }
//   if (messages[i].length > longestWord) {
//     longestWord = messages[i];
//   }
//   console.log(longestWord);
//   return longestWord;
// };

// console.log(slug('The quick brown fox jumped over the lazy dog'));
// const findLongestWord = function (str) {
//   let arrStr = str.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }
//   }
// };

// // Вызовы функции для проверки
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // вернет 'jumped'

// console.log(findLongestWord('Google do a roll')); // вернет 'Google'

// console.log(findLongestWord('May the force be with you')); // вернет 'force'

// console.log(slug('The quick brown fox jumped over the lazy dog'));

// const slug = function getExtremeElements(array, value) {
//   console.log(array, value);

//   for (let i = 0; i <= array.length; i += 1) {
//     const filteredNumbers = array[i];
//     console.log(filteredNumbers);
//     if (filteredNumbers === value) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(slug([1, 2, 3, 4, 5], 17));

// const location = {
//   country: 'Ямайка',
//   city: 'Кингстон',
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = location;
// function countProps(object) {
//   let propCount = 0;

//   const book = object;
//   // console.log(book);
//   for (const key in book) {
//     if (object.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(object[key]);
//       propCount += 1;
//     }
//   }

//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   console.log(apartment[key]);
//   values.push(apartment[key]);
// }

// function countProps(salaries) {
//   console.log(salaries);
//   let totalSalary = 0;

//   const values = Object.values(salaries);
//   console.log(values);
//   for (const value of values) {
//     totalSalary += value;
//   }

//   return totalSalary;
// }
// console.log(countProps({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// ЗАДАЧА 18
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     // console.log(product.name);
//     // console.log(product);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Двигатель'));

// ЗАДАЧА 19

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const result = [];
//   // console.log(result);
//   for (const product of products) {
//     console.log(product);

//     if (product[propName]) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }
// console.log(getAllPropValues('category'));

// ЗАДАЧА 20
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let result = 0;

//   for (const product of products) {
//     console.log(product);

//     if (productName === product.name) {
//       result = product.price * product.quantity;
//     }
//   }
//   return result;
// }
// console.log(calculateTotalPrice('Захват'));
// ЗАДАЧА 21
