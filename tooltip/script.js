// скорость transition в мс number
let speedTransition = 250;
document.querySelector('.marker').addEventListener('mouseover', function(){
    document.querySelector('.popup').style.display = 'block';
    function myTimeout(){
        document.querySelector('.popup').style.opacity = 1;
    };
    setTimeout(myTimeout, 1);
    console.log('123');
});
document.querySelector('.marker').addEventListener('mouseout', function(){
    document.querySelector('.popup').style.opacity = 0;
    function myTimeout(){
        document.querySelector('.popup').style.display = 'none';
    };
    setTimeout(myTimeout, speedTransition);
});
