// functional programming

// let currencyOne = 100
// let currencyTwo = 0
// let exchangeRate = 1.2

// function convertCurrency(amount, rate){
//     return amount * rate
// }

// currencyTwo = convertCurrency(currencyOne, exchangeRate)

// console.log(currencyTwo)


var shoes = 100
var stateTax = 1.2

function totalPrice(shoes, tax){
    return shoes * tax
}

var toPay = totalPrice(shoes, stateTax)
console.log(toPay)

// // RECURSION


// let counter = 3
// function example() {
//     console.log(counter)
//     counter -= 1
//     if (counter === 0){
//         return
//     }
//     example()
// }

// example()

