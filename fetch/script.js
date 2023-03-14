// fetch('https://jsonplaceholder.typicode.com/todos/1')     // получаем промис, который формирует ajax запрос. делает базовый get запрос, если запрос отличается от базового get, то нужно указать второй аргумент с доп настройками
//     .then(response => { // в первом ответе будет объект ответа, в котором будет набор свойств и методов для работы в объектом, в данном случае, json
//         console.log(response) 
//         return response.json() // метод нельзя вызывать больше одного раза, в данном случае, json нужен для получения тела запроса 
//     }).then(post => console.log(post))
//     .catch(error => console.log(error))


function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            return response.json()
        }).then(post => resolve(post))
        .catch(error => reject(error))// позволит обработать ошибку снаружи
        })
}

getPost(1).then(post => console.log(post))
// чтобы приложение не упало в ран тайме 
function getPost2(id) {
    try {
        const [userType, userId] = id.split('-'); // разбив 'user-1' 
        return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(response => {
                return response.json()
            });
    } catch (error) {
        console.log(error)
    }
    
}
try {
    getPost2(1).then(post => console.log(post)).catch(error => console.log(error))
} catch (error) {
    console.log(error)
}





function getPost3(id) {
    return Promise.resolve().then(() => {
        const [userType, userId] = id.split('-'); // разбив 'user-1' 
        return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(response => {
                return response.json()
            });
    })
}

getPost3(1).then(post => console.log(post)).catch(error => console.log(error))