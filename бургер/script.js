document.querySelector('.burger').addEventListener('click', function(event){
    event.target.classList.toggle('blue')
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})