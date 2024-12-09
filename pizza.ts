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

persons.push(person1)
persons.push(person2)
console.log(persons)

type Pizza = {
    id: number,
    name: string,
    price: number
}

type newOrder = {
    pizza: Pizza,
    status: "Ordered" | "Completed"
    Id: number
}

//TESTING from index.js
const menu : Pizza[] = [
    { id: 1, name: "Marg", price: 8},
    { id: 2, name: "Pep", price: 10},
    { id: 3, name: "Haw", price: 10},
    { id: 4, name: "Veg", price: 9}
]

let cashInRegister : number = 100
const orderHistory: newOrder[] = []
let orderId : number = 1

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (selectedPizza !== undefined) {
        cashInRegister += selectedPizza.price
        const newOrder: newOrder = {pizza: selectedPizza, status: "Ordered", Id: orderId++}
        orderHistory.push(newOrder)
        return newOrder
    } else {  
        return "This pizza does not exist"
    }
}

function completeOrder(orderId : number) {
    const order = orderHistory.find(order => order.Id === orderId)
    if (order) {
        order.status = "Completed"
        return order
    }
}

function getPizzaDetail(identifier: string | number) {
    if (typeof identifier == "string") {
        const pizzaInfoObject = menu.find(pizzaObj => pizzaObj.name === identifier)
        if (pizzaInfoObject) {
            return pizzaInfoObject
        } else {
            return "There is no pizza on the menu with this name"
        }
    } else if (typeof identifier == "number"){
        const pizzaInfoObject = menu.find(pizzaObj => pizzaObj.id === identifier)
        if (pizzaInfoObject) {
            return pizzaInfoObject
        } else {
            return "There is no pizza on the menu with this ID"
        }
    }
    return "Please provide either a Pizza of Type String or Id of Type Number"
}

addNewPizza({id: 5,  name: "chick bac ranch", price: 12})

placeOrder("chick bac ranch")

completeOrder(1);

console.log(orderHistory)

console.log(getPizzaDetail(5))
