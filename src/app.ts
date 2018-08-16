import {express} from 'express'

function sayHello(name: string) {
    return 'Hello' + name
}

let myName = 'Weigo'

console.log(sayHello(myName))