// await нужен просто для удобства

const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodos(){
//     console.error('start')
//     return delay(2000).then(() => {
//         return fetch(url)
//     }).then(response => response.json())
// }
// fetchTodos().then(data => console.log(data)).catch(e => console.error(e))
// delay(2000).then(() => console.log('2s'))


// функции работают одинаково 
async function fetchTodosAsync(){// если внутри функции используется оператор await нужно объявить функцию асинхронной 
    try {
        console.log('start')
        await delay(2000) // await работает как then 
        const pespons = await fetch(url) // можно присвоить в переменную и ждёт выполнения промиса
        const data = await pespons.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    } finally {
        console.log('finally')
    }
}
fetchTodosAsync();// функция возвращает промис 