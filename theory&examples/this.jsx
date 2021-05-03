// https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

// Как работает this.
// Его базовое применение. Сначала метод принимает this, потом список параметров. В данном случае this — "Yehuda"
function hello(thing) {
  console.log(this + " says hello " + thing);
}

hello.call("Yehuda", "world") //=> Yehuda says hello world

// Что такое call? Call — это основной способ вызова метода. Однако есть другой способ вызов функции: hello("world")
// Это синтаксический сахар для hello.call(window, "world");


function hello(thing) {
  console.log("Hello " + thing);
}

// this:
hello("world")

// desugars to:
hello.call(window, "world");


// bind — это трюк, который нужен для того, чтобы передать в функцию нужный this
var bind = function(func, thisValue) {
  return function() {
    return func.apply(thisValue, arguments);
  }
}
var boundHello = bind(person.hello, person);
boundHello("world") // "Brendan Eich says hello world"

// ES5 представил новый метод bind для всех объектов Function, который реализует это поведение:

var boundHello = person.hello.bind(person);
boundHello("world") // "Brendan Eich says hello world"
