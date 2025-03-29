//  Syntax-> function function_name(parameter){  }

function mynameis(){
    console.log("Nishant Jaiswal")
}

// mynameis()

// function addtwo(num1,num2){   //no dat types required 
//     console.log(num1+num2)    //this is like void in C++
// }

// or 
function addTwo(num1,num2){
    return num1+num2
}

// addtwo(3,8)
// console.log(addTwo(3,9))

function loginusermessage(username){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(loginusermessage())
// console.log(loginusermessage("NIshant"))


function calculateCartPrice(...num1){  //  ... rest operator takes all the arguments
     return num1
}

// console.log(calculateCartPrice(200,300,100))

function print_n_to_1(n){
     if(n==0) return
     console.log(n)
     print_n_to_1(n-1)
}

// print_n_to_1(12)


//Arrow function

// const addtwo=(x,y)=>{
//     return x+y
// }

// or
const addtwo=(x,y)=>(x+y)  //in return type use curly bracket else parentheses

console.log(addtwo(3,9))