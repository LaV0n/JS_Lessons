import React from "react";


console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(x: number) {
    function subsum(y: number) {
        return x + y
    }

    return subsum
}

console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let count = 0;
    return () => {
        return count++
    }
}
let counter = makeCounter();
const counter2 = makeCounter();
console.log("T1 counter : " + counter())
console.log("T1 counter : " + counter())
console.log("T1 counter2 : " + counter2())
console.log("T1 counter : " + counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const newCounter = (x: number) => {
    let count = x;
    return {
        increase: () => {
            return () => {
                return ++count
            }
        },
        decrease: () => {
            return () => {
                return --count
            }
        },
        reset: () => {
            return () => {
                count = x;
                return count
            }
        },
        set: (y: number) => {
            return () => {
                count = y;
                return count
            }
        }
    };
}
let num = newCounter(2).increase();
console.log("2 ++ : " + num());
console.log("2 ++ : " + num());
console.log("2 ++ : " + num());
let num2 = newCounter(5).increase();
console.log("5 ++ : " + num2());
console.log("5 ++ : " + num2());
console.log("5 ++ : " + num2());
let num3 = newCounter(2).decrease();
console.log("2 -- : " + num3());
console.log("2 -- : " + num3());
console.log("2 -- : " + num3());
let num4 = newCounter(5).decrease();
console.log("5 -- : " + num4());
console.log("5 -- : " + num4());
console.log("5 -- : " + num4());
let num5 = newCounter(10);
console.log("10 -- : " + num5.decrease()());
console.log("10 -- : " + num5.decrease()());
console.log("10 reset : " + num5.reset()());
console.log("10 -- : " + num5.decrease()());
let num6 = newCounter(7)
console.log("7 -- : " + num6.decrease()());
console.log("7 set 11  : " + num6.set(11)());
console.log("11 ++ : " + num6.increase()())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function curry(func) { //@ts-ignore

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this,args);
        } else {
            return function(...args2:number[]) {
                return curried.apply( args.concat(args2));
            }
        }
    };

}
function sume (a:number, b:number, c:number):number {
    return a + b + c;
}

let curriedSum = curry(sume); //@ts-ignore

console.log( curriedSum(1, 2, 3) ); //@ts-ignore 6, всё ещё можно вызывать нормально
console.log( curriedSum(1)(2,3) ); // @ts-ignore6, каррирование первого аргумента
console.log( curriedSum(1)(2)(3) ); // @ts-ignore6, каррирование всех аргументов



// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

const sumTo = (n: number) => {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result
}

console.log('sum ver1 number 5 : ' + sumTo(5))

const sumTo2 = (n: number): number => {
    if (n < 1) {
        return n
    } else {
        return n + sumTo2(n - 1)
    }
}
console.log('sum ver2 number 5 : ' + sumTo2(5))

const factorial = (n: number): number => {
    if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log("factorial 5 : " + factorial(5))

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list: any) {

    console.log("list el : " + list.value);
    if (list.next) {
        printList(list.next);
    }
}

printList(list);

function printListRevers(list: any) {


    if (list.next) {
        printListRevers(list.next);
    }

    console.log("listReverse el : " + list.value);
}

printListRevers(list);

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug


export default {};