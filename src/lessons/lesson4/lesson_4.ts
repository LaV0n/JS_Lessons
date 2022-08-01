import {posix} from "path";
import React from "react";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const promise1 = new Promise((resolve, reject) => {
    console.log("Promise is created")
})
console.log(promise1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const task2 = new Promise((resolve) => {
    resolve("Promise Data")
})
console.log(task2)
task2.then((resolve) => {
    console.log(resolve)
})

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const task3 = new Promise((resolve, reject) => {
    reject("Promise Error")
})
console.log(task3)
task3.then((err) => {
    console.log(err)
})

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const task4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Data"), 3000)
})
console.log(task4)
task4.then((resolve) => {
    console.log(resolve)
})

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

let handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: string) => console.log(`Promise is rejected with error: ${paramName}`),
}
export const CreatePromiseHandler = () => {//@ts-ignore
    return handlePromise.promise = new Promise((resolve, reject) => {
        resolve(handlePromise.onSuccess);
        reject(handlePromise.onError)
    })
}
    export const ResolvePromiseHandler = ()=>{//@ts-ignore
    return handlePromise.promise.then()
    }
export const RejectPromiseHandler = ()=>{//@ts-ignore
    return handlePromise.promise.catch()
}
console.log(handlePromise)

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const task6 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("My name is"),1000)
})

const onSuccess =(p:string)=>{
    return  p+"LaVon"
}
const print =()=>{
    return
}
console.log(task6)
task3.then((err) => {
    console.log(err)
})

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
const name = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "Anna" }), 2000)
})
const age = new Promise((resolve, reject) => {
    setTimeout(() => resolve({age: 16} ), 3000)
})
const city = new Promise((resolve, reject) => {
    setTimeout(() => resolve({city: ''}), 4000)
})
console.log(name.then())

// just a plug
export default () => {
};