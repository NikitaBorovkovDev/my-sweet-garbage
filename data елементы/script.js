document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('[data-test]').setAttribute("data-test", "testJS");
    document.querySelector('.menu').dataset.test = "testJSDataset";
    let i = document.querySelector('[data-test]').getAttribute("data-test");
    console.log(i);
})