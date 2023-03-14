async function myFetchGet() {
    const response = await fetch('https://gorest.co.in/public/v2/users/',);
    const data = response.json();
    data.then(date => console.log(date));
}
async function myFetchDelete() {
    await fetch('https://gorest.co.in/public/v2/users/3905', {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer e085050f994f72758537c0b984ddeadfbc03c6ff366043cf44221043055b773a', // Bearer нужен чтобы токен был понят 
        }
    });
}
async function myFetchPost() {
    await fetch('https://gorest.co.in/public/v2/users', {
    method: "POST",
    body: JSON.stringify({// преобразует любой obj в json
        "name": "Tes2153123t Auto User", "email": "testauto111231254@yopmail.com", "gender": "male", "status": "active"}),
    headers: {
        Authorization: 'Bearer e085050f994f72758537c0b984ddeadfbc03c6ff366043cf44221043055b773a', // Bearer нужен чтобы токен был понят 
        'Accept': 'application/json', 
        "Content-Type": 'application/json' 
    }
})
}