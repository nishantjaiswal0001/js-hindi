// // Object literals

// const jsuser={
//     name: "nishant",
//     "full name": "nishant jaiswal",
//     age: 18,
//     location: "Patna",
//     email:"nishant.com",
//     isloggedin:false,
//     latlogindays:["Monday","Saturday"]
// }

// // console.log(jsuser.email)  //not a good way
// // console.log(jsuser["email"])  //a good way

// jsuser.email="nianht.com"
// console.log(jsuser["email"]) 
// // Object.freeze(jsuser)
// jsuser.email="nibnght.com"
// // console.log(jsuser["email"]) 
// // console.log(jsuser)

// jsuser.greeting=function(){
//     console.log(`hello js user ${this.name}`)
// }

// console.log(jsuser.greeting())


//Singleton
// Object.create
// const tinderuser={}
// tinderuser.id="123abcd"
// tinderuser.name="Sammy"
// tinderuser.isloggedin=false

// // console.log(tinderuser)
// const regularuser={
//     email: "nishu@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "Nishant",
//             lastname: "Jaiswal"
//         }
//     }
// }

// console.log(regularuser.fullname.userfullname.firstname)
// const obj1={1: "a",2:"b"}
// const obj2={3: "a",4:"b"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(tinderuser.hasOwnProperty("isloggedin"))



//Destructure

const course={
    coursename: "JS in hindi",
    price: "999",
    courseinstructor: "Hitesh"
}

// const {courseinstructor}=course
// console.log(courseinstructor)

// const {coursename: cn}=course  //if larger name can be reduced
// console.log(cn)


// json JSON is also an object

// API format may be used in objects or array format

{
    name: "nishant";
    coursename: "js"
    price :"free"
}

//Array format

[
    {},
    {}
]


