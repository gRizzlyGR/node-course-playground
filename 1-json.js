const fs = require('fs')

// const book = {
//     title: 'Lord of the rings',
//     author: 'Tolkien'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const buffer = fs.readFileSync('1-json.json')
const json = buffer.toString()
const data = JSON.parse(json)
data.name = 'Giuseppe'
data.age = 31
const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData)