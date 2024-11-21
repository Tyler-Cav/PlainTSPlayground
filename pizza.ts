type Pizza = {
    name: string,
    price: number
}

type OrderQueue = {
    name: string,
    status: string,
    Id: number
}

//TESTING from index.js
const menu = [
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
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
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

