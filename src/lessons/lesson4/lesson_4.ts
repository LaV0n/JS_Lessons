console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const task1 = new Promise(() => {

    console.log("Promise is created")
})
console.log(task1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const task2 = new Promise((resolve) => {
    resolve("Promise Data")
})
task2.then((resolve) => {
    console.log("task2 : " + resolve)
})

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const task3 = new Promise((resolve, reject) => {
    reject("Promise Error")
})
task3.catch((err) => {
    console.log("task3 : " + err)
})

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const task4 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise Data"), 3000)
})
task4.then((resolve) => {
    console.log("task4 : " + resolve)
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

type stateType = {
    promise: null | Object
    resolve: null | Object
    reject: null | Object
    onSuccess: (paramName: string) => void,
    onError: (paramName: string) => void
}
const handlePromise: stateType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: string) => console.log(`Promise is rejected with error: ${paramName}`)
}
const CreatePromise = () => {
    let promise = new Promise((resolve, reject) => {
        resolve('resolve')
        // reject('reject')
    })
    handlePromise.promise = promise;
    handlePromise.resolve = promise.then((resolve) => console.log(resolve))
    handlePromise.reject = promise.catch((err) => console.log(err))
}
const ResolvePromise = () => {
    console.log(handlePromise.resolve)
}
const RejectPromise = () => {
    console.log(handlePromise.reject)
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve('My name is'), 1000)
})
const onSuccess = (n: string) => {
    return n + " LaVon"
}
const print = (n: string) => {
    console.log(n)
}
promise // @ts-ignore
    .then((n) => onSuccess(n))
    .then((n) => print(n))

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(({name: "Anna"})), 2000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({age: 16}), 3000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({city: ''}), 4000)
})

let result:any = {};
promise1 // @ts-ignore
    .then(res => result[0]=(res.name))
promise2 // @ts-ignore
    .then(res => result[1]=(res.age))
promise3 // @ts-ignore
    .then(res => result[2]=(res.city))
    .then(()=>console.log(result))


// just a plug
export default () => {
};