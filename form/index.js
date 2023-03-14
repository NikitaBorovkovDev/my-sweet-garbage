const form = document.getElementsByTagName('form')[0];
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const TEL_REGEXP = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidate(form)
})


function formValidate(form) {
    let errors = 0;
    let formReq = document.querySelectorAll('._req');
    formReq.forEach(item => {
        if (item.classList.contains('_email')) { 
            if (!emailValidate(item)) {
                console.log('no email');
                addError(item);
                errors++;
            } else {
            }
        } else if (item.classList.contains('_name')) {
            if (item.value == '') {
                console.log('no name');
                addError(item);
                errors++;
            } else {
            }
        } else if(item.classList.contains('_tel')) {
            if (!telValidate(item)) {
                console.log('no tel');
                addError(item);
                errors++;
            } else {
            }
        } else if (item.getAttribute("type") === "checkbox" && item.checked === false) {
            addError(item);
            errors++;
            console.log('no check');
        } else if (item.classList.contains('_text') && item.value == '') {
            addError(item);
            errors++;
            console.log('no text');
        }
    })
    console.log(errors);
}

function addError(input) {
    input.classList.add('_error');
    input.parentElement.classList.add('_error');
}

function removeError(input) {
    input.classList.add('_error');
    input.parentElement.classList.add('_error');
}

function emailValidate(input) {
    return EMAIL_REGEXP.test(input.value)
}
function telValidate(input) {
    return TEL_REGEXP.test(input.value)
}

const formImage = document.getElementById('file');
const formPreview = document.getElementById('formPreview');


formImage.addEventListener('change', event => {
    showPreview(event);
})


function showPreview(event){
    if(event.target.files.length > 0){
        console.log(URL.createObjectURL(event.target.files[0]));
        var src = URL.createObjectURL(event.target.files[0]);
        formPreview.innerHTML = `<img src="${src}">`;
    }
}