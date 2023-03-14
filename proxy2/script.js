//wraper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
    })
}

const position = withDefaultValue({
    x: 24,
    y: 42,
}, 0)
// можно получать координаты x, y, а для других значений выдаёт 0, вместо ошибки
console.log(position)

//hidden 
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => ((prop in receiver) ? obj[prop] : void 0),
    })
}
// к полям начинающимся с _ нельзя обращаться, их можно только увидеть в объекте, но с ними нельзя взаимодействовать
const data = withHiddenProps({
    name: 'vlad',
    age: 123,
    _uid: 123123123
})


