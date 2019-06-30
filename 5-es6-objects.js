// Object property shorthand

const name = 'Giuseppe'
const userAge = '31'

const user = {
    name,
    age: userAge,
    location: 'Turin'
}

console.log(user)

// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel, stock, rating)


const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)
