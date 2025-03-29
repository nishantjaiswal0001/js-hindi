const arr=[23,45,12,3,5,6]
// console.log(arr)


//Array methods 
arr.push(12)
arr.push(19)
arr.pop()

arr.unshift(3)  //insert at 0th index
// console.log(arr)
arr.shift()     //remove 0th index
// console.log(arr)
// console.log(arr.includes(45)) //search 45 in arr boolean check

const newarr=arr
// console.log(newarr)

const Newarr=arr.join()///string 
// console.log(Newarr)


//slice,splice
console.log("A",arr)
const myn1=arr.slice(1,3)
// console.log(myn1)
// console.log("B",arr)

// const myn2=arr.splice(1,3)
// console.log("C",arr)
// console.log(myn2)

// arr.push(myn1)
// console.log(arr)

const new1=arr.concat(myn1)
console.log(new1)