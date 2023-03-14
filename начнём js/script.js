let hello="hello world";
console.log(hello);
let myName="lol",
qwe="123";
const QWE_123=123;
console.log(typeof QWE_123);
//undefind объявлен, но не присвоено значение
//null это спец значение ничего 
//infinity возникает при делении на 0
//NaN мат ошибка
qwe = String(qwe);
//преобразование числа в строку 
qwe = Number(qwe);
//преобразование строку в число

//операнд это аргумент, то к чему применяется оператор
//бинарный оператор применяется к двум операндам
//унарный где только один операнд
let x = 10;
console.log(`результат = ${x}`);
x = +12;
//быстрое преобразование в числовой тип
x += 2;
x++;
//инкримент
x--;
//дикремент
console.log(x);
//строгое равно сравнивает без преобразования в единый тип данных 
// "!=" не равно
if (x>1){
    console.log("qwe");
}
else if (x!=x) {
    //hehe
}
else{
    //not hehe
}
x = (x=x) ? ++x : x!=x ? "hehe": "not hehe";
// ? это тернард, у него 3 операнда 
console.log(x);

while (x>x){
    //none;
    x++;
};
do {
    x=x;
} while (x>x);
for (let y = 0; y = 0; y++){
    //zxc
    continue;
    //пропуск этерации
    break;
}; 
metka:for (let y = 0; y = 0; y++){
    for (let y = 0; y = 0; y++){
        break metka;
        //остановка родителя через метку так же и для continue
    }
}
function showX(x, y = 1) {
    return y;
}
showX(10);


let userInfo = {
    name: "name",
    age: 30,
};
alert(userInfo.name);
