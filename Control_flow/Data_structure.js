const map=new Map()
map.set("IN","India")
map.set("USA","America")
map.set("Fr","France")

// console.log(map)

// for(const [key,value] of map){
//     console.log(key,":-",value)
// }

const myobject={
    js: "javascript",
    cpp:"C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for(const key in myobject){
//     console.log(`${key} , ${myobject[key]}`)
// }

//for each loop

const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values)

const nums=[1,2,3,4,5,6,7,8,9,10]

const newnums=nums.filter((num)=>{
    return num>4
})

console.log(newnums)