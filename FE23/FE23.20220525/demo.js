// const max = Math.max(1,3,5) // output: 5
// const maxInArray = Math.max(...[1,3,5])

// const object = { a: 1, b: 2, c: 3 };
// const objectTwo = { d: 4, e: 5 };
// const combinedObject = { ...object, ...objectTwo }

// const arr = [1, 2, 3]

// console.log({...object, d: 4})

const array = ['😉','😊','😇']
const copyWithEquals = array // Copy mảng bằng cách gán
const copyWithSpread = [...array] // Copy bằng spreading operation

array[0] = '😡'

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSpread)
