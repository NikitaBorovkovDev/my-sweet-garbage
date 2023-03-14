const root = document.getElementById('root');


function addNameInHTML(arr) {
    arr.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name
        root.append(listItem)
    })
}

function getUsersByIds(arr) {
    data1.then((data) => {
        console.log(data);
        arr.map(index => {
            console.log(data[0]);
            const userId = data.findIndex(dataItem => dataItem.id == index)
            console.log(userId);
            if (userId !== -1) {
                const listItem = document.createElement('li');
                listItem.textContent = data[userId].name
                root.append(listItem)
            }
        })
    })    
    
}
 
const data1 = fetch('https://jsonplaceholder.typicode.com/users')
.then(data => {
    console.log('prep');
    if (!data.ok) {
        throw new Error('error data')
    }
    return data.json()
})
.then(data => {
    console.log(data);
    return data
})
.catch((error) => {
    console.error('(', error);
})

getUsersByIds([5, 6, 2, 1])