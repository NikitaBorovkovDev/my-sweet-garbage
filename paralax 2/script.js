"use strict"


window.onload = () => {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const content = document.querySelector('.parallax__container');
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const human = document.querySelector('.images-parallax__human')


        const mouseFactorForClouds = 40;
        const mouseFactorForMountains = 20;
        const mouseFactorForHuman = 10;
        const scrollFactorForParallaxContent = 9;
        const scrollFactorForMountains = 6;
        const scrollFactorForhuman = 3;
        const speedAnimation = 0.05;

        let positionX = 0, positionY = 0, coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speedAnimation);
            positionY = positionY + (distY * speedAnimation);

            clouds.style.cssText = `transform: translate(${positionX/mouseFactorForClouds}%, ${positionY/mouseFactorForClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX/mouseFactorForMountains}%, ${positionY/mouseFactorForMountains}%);`;
            human.style.cssText = `transform: translate(${positionX/mouseFactorForHuman}%, ${positionY/mouseFactorForHuman}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();
        parallax.addEventListener('mousemove', event => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight

            // 0 по центру 
            const coordX = event.pageX - parallaxWidth / 2;
            const coordY = event.pageY - parallaxHeight / 2;

            // получение процентов 
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

        // parallax при скпролле

        let thresholdSteps = [];
        for (let i = 0; i <=1.0; i += 0.005) {
            thresholdSteps.push(i);
        };
        const callback = (entries, observer) => {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSteps
        });
        observer.observe(document.querySelector('.content'));

        function setParallaxItemStyle(scrollTopProcent) {
            content.style.cssText = `transform: translate(0%, -${scrollTopProcent / scrollFactorForParallaxContent}%);`;
            mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / scrollFactorForMountains}%);`;
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / scrollFactorForhuman}%);`;
        }
    }
}