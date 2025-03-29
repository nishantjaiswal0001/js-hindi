// This section includes if else conditions

const usermail="nishant@gmail.com"

if(usermail){     //a non empty string considered as true infact "0" is also a truthy value
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

//Ternary
// let n=27
(57%2==0)?console.log("Even"):console.log("Odd")