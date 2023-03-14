
    const cols = document.querySelectorAll('.col');
    document.addEventListener('click', event => {
        const dataButton = event.target.closest(`[data-type]`);
        const colorText = event.target.closest('h2')
        if (dataButton){
            let iconLock = dataButton.querySelector('i');
            iconLock.classList.toggle('fa-lock-open');
            iconLock.classList.toggle('fa-lock');
            setRandomColors('isClick');
        } else if (colorText) {
            copyToClick(colorText.textContent)
        };
    })
    document.addEventListener('keydown', event => {
        event.preventDefault();
        if (event.code.toLowerCase() === 'space') {
            setRandomColors();
        }
    })
    function generateRandomColor(){
        // RGB 
        // red #ff0000
        // green #00ff00
        // blue #0000ff

        const hexCodes = '0123456789ABCDEF';
        let color = '';
        for (let i = 0; i<6; i++){
            color += hexCodes[Math.floor(Math.random() * hexCodes.length)]; // в скобках номер цифры в строке hexCodes
        };
        return '#' + color
    }
    function copyToClick(text){
        return navigator.clipboard.writeText(text);
    }
    function setRandomColors(condition){
        console.log('hash',getColorsHash(),);
        console.log('hash',getColorsHash(), );
        if (condition === 'firstLoad' && getColorsHash()) {
            var HashColors = getColorsHash();
        } else if (getColorsHash()){
            var HashColors = getColorsHash();
        } else {
            var HashColors = []
        }
        console.log('hash', HashColors);
        console.log('START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        cols.forEach((col, index) => {
            if (HashColors[index] && (HashColors[index] != "random") && condition === 'firstLoad') {
                col.querySelector('i').classList.toggle('fa-lock-open');
                col.querySelector('i').classList.toggle('fa-lock');
            };
            const isLocked = col.querySelector('i').classList.contains('fa-lock');
            const text = col.querySelector('h2');
            let color;
            if (condition === 'isClick') {
                color = text.textContent;
                console.log('1',color);
                
            } else if ((condition === 'firstLoad') && HashColors[index] && (HashColors[index] !== 'random')){
                color = HashColors[index]
                console.log('3',color);
            } else if (condition === 'firstLoad'){
                color = generateRandomColor();
                console.log('2',color);
            } else if (HashColors[index] && (HashColors[index] !== 'random')){
                color = HashColors[index];
                console.log('4',color);
            } else {
                color = generateRandomColor();
            }
            console.log('color',color);
            const button = col.querySelector('button')
            
            if (isLocked && condition === 'firstLoad') {
                console.log('hash231231',HashColors[index]);
                HashColors[index] = color;
                col.style.background = color;
                text.textContent = color;
                console.log('color231231',color);
                console.log('endColor', HashColors[index]);
                console.log('endColorFull', HashColors);
                return;
            };
            if (isLocked) {
                console.log('hash231231',HashColors[index]);
                console.log('color231231',color);
                HashColors[index] = color;
                console.log('endColor', HashColors[index]);
                console.log('endColorFull', HashColors);
                return;
            }
            if (condition === 'firstLoad'){
                
            };
            HashColors[index] = 'random';
            text.textContent = color;
            
            col.style.background = color;
            setTextColor(text, color);
            setTextColor(button, color);
            console.log('endColor', HashColors[index]);
            console.log('endColorFull', HashColors);
        })
        getColorsFromHash(HashColors);
    };

    function setTextColor(text, color){
        const luminance = chroma(color).luminance();// значения от 0 до 1 0 белый, 1 чёрный 
        text.style.color = luminance > 0.5 ? 'black' : 'white';
    }


    function getColorsFromHash(colors = []) {
        document.location.hash = colors.toString().split('#').join('').split(',').join('-')
    }
    function getColorsHash(){
        if (document.location.hash.length > 1) {
            return document.location.hash.substring(1).split('-').map(color => {
                if (color !== "random") {
                    return color = '#' + color;
                } else {
                    return color
                }
            })
        }
    }
    setRandomColors("firstLoad");