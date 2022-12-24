// Область видимости перемнных, объявленных с помощью var — это функция.
// Переменные, объявленые оператором var, относятся к функции и доступны даже вне цикла.

var a; // Объявление переменной (идентификатора)
console.log(a); // undefined — значение по умолчанию во время создания фазы “Создания”(hoisting)
a = 10; // Иниициализация переменной

// Отличия let и var
// 1. Область видимости (let — блок, var – функция)
// 2. Hoisting (
//   при заправшивании переменной let до ее объявления, JS вернет ошибку ReferenceError,
//   при заправшивании переменной var до ее объявления, JS вернет undefined
// )

// Отличия let и const
// Значение переменной const нельзя изменить (ошибка: TypeError: Assignment to constant variable.)

// (!) Изменение свойства объекта не является его переназначением
const person = {
  name: 'Kim Kardashian'
}
person.name = 'Kim Kardashian West' // OK
person = {} // TypeError: Assignment to constant variable.

// Всегда следует использовать const, кроме тех случаев, когда известно, что переменная будет изменятся!
// Если нужна изменяемая переменная (например, в цикле for), то следует использовать let.

// Итог:
// var VS let VS const
// var:
//   function scoped
//   undefined when accessing a variable before it's declared
// let:
//   block scoped
//   ReferenceError when accessing a variable before it's declared
// const:
//   block scoped
//   ReferenceError when accessing a variable before it's declared
//   can't be reassigned

// Доп. ссылка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
