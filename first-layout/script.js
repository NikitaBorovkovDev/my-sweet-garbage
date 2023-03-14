$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu, .header_burger_close').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('lock_burger');
    })
});
// if(window.matchMedia('(max-width: 768px)').matches){
//     document.getElementById("header_photo").src="img/bgMobile.png";
// } else {
//     document.getElementById("header_photo").src="/img/BSPP2266.png";
// }
var mql = window.matchMedia('all and (max-width: 768px)');
if (mql.matches) {
    document.getElementById("header_photo").src="img/bgMobile.png";
} else {
    document.getElementById("header_photo").src="img/BSPP2266.png";
};
window.addEventListener('resize', (e) => {
    if (mql.matches) {
        document.getElementById("header_photo").src="img/bgMobile.png";
    } else {
        document.getElementById("header_photo").src="img/BSPP2266.png";
    };
  });