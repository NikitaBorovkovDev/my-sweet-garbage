const bgContainer = document.querySelector('.block');

let r = 0;
let g = 0;
let b = 0;

function what() {
    setTimeout(() => {
        bgContainer.style.background = `rgb(${r},${g},${b})`
        if (r < 255) {
            ++r;
            what();
        } else {
            whatG()
        }
        // if (g < 255) {
        //     ++g;
        //     what();
        // }
        // if (b < 255) {
        //     ++b;
        //     what();
        // }
    }, 15)
}
function whatG() {
    setTimeout(() => {
        bgContainer.style.background = `rgb(${r},${g},${b})`
        if (g < 255) {
            ++g;
            what();
        } else {
            whatB()
        }
    }, 15)
}
function whatB() {
    setTimeout(() => {
        bgContainer.style.background = `rgb(${r},${g},${b})`
        if (b < 255) {
            ++b;
            what();
        }
    }, 15)
}