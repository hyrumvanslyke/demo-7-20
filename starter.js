let myFriends = ['Dylan', 'Esau', 'Killian', 'Elliott', 'Jed']
 myFriends.forEach((friend) => console.log(`${friend} is my friend`))// for each of our friends it will print that person is my friend MOST COMMON

let logFriends = (friend) => console.log(`${friend} is my friend `)
myFriends.forEach(logFriends) 

let cart = ['Magic cards', 'food', 'candy', 'socks' ]

let statement = cart.map((item) => `Hyrum buys too many ${item}`)

console.log(statement)

let employees = [
    {
        name : 'Jed',
        position : 'top',
        salary : 25000

    },
    {
        name : 'Esau',
        position : 'bottom',
        salary : 35000

    },
    {
        name : 'Elliott',
        position : 'bottom',
        salary : 25000

    },
]
//          fliter says if true return that persons info
let overPaidEmp = employees.filter((person) => person.salary > 25000)
console.log(overPaidEmp)


let bestEmployees = employees.filter((person) => person.position === 'top')

let employeeOfTheMonth = employees.filter((person) => person.name === 'Kyle' || person.name === 'Esau')
console.log(employeeOfTheMonth)

let cart2 = [
    {
        name: 'Wedding ring',
        price: 838.59,
        onSale: false
    },
    {
        name: 'Commander deck',
        price: 84.37,
        onSale: false
    },
    {
        name: 'Watch bands',
        price: 8.99,
        onSale: true
    },
    {
        name: 'Tires',
        price: 201.93,
        onSale: false
    }
]

let result = cart2.map((item) => {
    if(item.onSale){
        return `You got a great deal on ${item.name} for only ${item.price}!!  🙌🙌`
    }else{
        return `YOu bought ${item.name} for ${item.price}.`
    }
})
let total = cart2.reduce((acc, item) => (acc + item.price), 0) // need to add the zero if dealing with objects to give it a starting value in the reduce method
console.log(result)
console.log(total)


let arr5 = [13, 56, 4, -8, 1238, 58]

//asending
let ascArr5 = arr5.sort((a, b) => a - b)
console.log(arr5)

// decending
let decArr5 = arr5.sort((a,b) => b-a)
console.log(arr5)

let question = ['chicken', 'egg']
question.sort()
console.log(question)