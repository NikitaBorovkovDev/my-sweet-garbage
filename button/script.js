let animIsEnd = false;
document.querySelector('.button').addEventListener('mousedown', (e) => {
    document.querySelector('.button').classList.add('button_active');
    setTimeout(() => {
        animIsEnd = true
        console.log(e);
        document.querySelector('.button').classList.remove('button_active');
    }, 1000)
})
// document.querySelector('.button').addEventListener('mouseup', () => {
//     if (animIsEnd) {
//         document.querySelector('.button').classList.remove('button_active');
//     }
// })