// object
const person = {
    name: 'Vlad',
    age: 25,
    job: 'Fullstack'
};
// второй параметр набор хендлеров, те методы которые могут сделать ловушки для объекта, в которых можно переписывать функционал
const op = new Proxy(person, {
    get(target, prop){
        
        if (!(prop in target)) {
            return prop
            .split('_')
            .map(p => target[p])
            .join(' ');
            
        }
        console.log('prop =', target);
        console.log('prop =', prop);
        return target[prop];
    },
    set(target, props, value){ // value вводится через параметры
        if (props in target) {
            target[props] = value
        } else {
            throw new Error('no prop field in target') // ошибка, нет props
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('deliting', prop)
        delete target[prop]
    }
});
console.log('op.name_job\n',op.name_job)
console.log(`'name' in op?\n` + ('name' in op));
console.log('age =', op.age);
delete op.age;
console.log('age =', op.age);


const log = text => `log: ${text}`;
const fp = new Proxy(log, {
    apply(target, thisArg, args){
        console.log('target', target); // сама функция
        console.log('thisArg', thisArg); // контекст
        console.log('args', args); // аргументы функции 
        return target.apply(thisArg, args) ;
    }
})

//class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) { // перехват объекта 
        console.log('target', target); // сама функция
        console.log('args', args); // контекст
        return new Proxy(new target(...args), {
            get (t, prop) {
                return t[prop]
            }
        });
    }
})

const p = new PersonProxy('max', 30)