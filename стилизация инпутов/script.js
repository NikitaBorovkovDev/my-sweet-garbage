document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('.select_text').addEventListener('click', function(){
        let option = document.querySelector('.option');
        option.style.justifyContent = "flex-start";
        let height = option.scrollHeight;
        option.style.justifyContent = "flex-end";
        if (option.classList.contains('active')){
            option.style.maxHeight = 0;
            // console.log(option.style.maxHeight);
        } else {
            option.style.maxHeight = height + "px";
            // console.log(option.style.maxHeight);
        }
        option.classList.toggle('active');
    });
    document.querySelectorAll('.option-button').forEach(itemOption => {
        itemOption.addEventListener('click', function(event){
            let option = document.querySelector('.option');
            option.style.justifyContent = "flex-end";
            console.log(event.currentTarget);
            optionValue = event.currentTarget.dataset.option;
            document.querySelector('#option').value = optionValue;
            document.querySelector('.select_text').textContent = event.currentTarget.textContent;
            console.log(optionValue);
            option.style.maxHeight = 0;
            // console.log(option.style.maxHeight);
            option.classList.toggle('active');
        })
    })
    document.querySelector('#wtf').addEventListener('click', function(){
        console.log(document.querySelector('#option').value);
    })
    
})