type Address = {
    street: string;
    city: string;
    country: string;
}

type Person = {
    name : string
    age: number
    isStudent: boolean
    address: Address
}

let persons: Person[] = []

let addressOne: Address = {
    street: "test3",
    city: "test4",
    country: "test5",
}

let person1: Person = {
    name: "Tyler",
    age: 28,
    isStudent: false,
    address: addressOne
}

let person2: Person = {
    name: "Eliza",
    age: 27,
    isStudent: false,
    address: addressOne
}
//
// persons.push(person1)
// persons.push(person2)
// console.log(persons)

type Pizza = {
    name: string,
    price: number
}

type Order = {
    name: string,
    pizza: Pizza,
    Id: number
}

//TESTING from index.js
const menu : Pizza[] = [
    { name: "Marg", price: 8},
    { name: "Pep", price: 10},
    { name: "Haw", price: 10},
    { name: "Veg", price: 9}
]

let cashInRegister : number = 100
const orderQueue = []
let orderId : number = 1

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza : Pizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (selectedPizza !== undefined) {
        cashInRegister += selectedPizza.price
        const newOrder = {pizza: selectedPizza, status: "Ordered", Id: orderId++}
        orderQueue.push(newOrder)
        return newOrder
    } else {
        return "This pizza does not exist"
    }
}

function completeOrder(orderId : number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (order) {
        order.status = "Completed"
        return order
    }
}

addNewPizza({name: "chick bac ranch", price: 12})

placeOrder("chick bac ranch")

completeOrder(1);

console.log(orderQueue)

