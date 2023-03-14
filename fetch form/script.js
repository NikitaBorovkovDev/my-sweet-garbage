async function fetchGet(userId) {
    const posts = await fetch('https://gorest.co.in/public-api/posts?page=10');
    const data = await posts.json();
    const titleBody = document.querySelector('#title__body');
    titleBody.textContent = data.data[0].body
    console.log(data.data[0].body);
}



async function myFetchPost() {
    p = await fetch('https://gorest.co.in/public/v2/users', {
        method: "POST",
        body: JSON.stringify({// преобразует любой obj в json
            "name": "Tes3223322751 User",
            "email": "test32333a5679@yopmail.com",
            "gender": "male", 
            "status": "active"}),
        headers: {
            Authorization: 'Bearer e085050f994f72758537c0b984ddeadfbc03c6ff366043cf44221043055b773a', // Bearer нужен чтобы токен был понят 
            'Accept': 'application/json', 
            "Content-Type": 'application/json' 
        }
    }).then((myResponse) => {
        return myResponse.json()
    });
    
    console.log('id=', await p.id)

}

    // titleBody.textContent = fetchGet()

//6415
//6421
//6439