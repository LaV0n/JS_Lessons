import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const get=axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => {
        console.log(res.data)
    })
const put=axios.put('https://jsonplaceholder.typicode.com/posts/1',{id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1})
    .then((res) => {
        console.log(res.data)
    })
const post=axios.post('https://jsonplaceholder.typicode.com/posts/',{   title: 'foo',
    body: 'bar',
    userId: 1,})
    .then((res) => {
        console.log(res.data)
    })
const del=axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        console.log(res.data)
    })

export default ()=>{};