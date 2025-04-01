//Objects
const student={
    name: "Nishant",
    reg_no: 20234109,
    printme: function(){
        console.log("Hi Nishant")
    },
    printreg_no: function(){
        console.log("reg_no: ",this.reg_no)  //this.reg_no=student.reg_no
    }
}

//Apart from the properties we define in the object there is an other inbuilt object prototype for each object like for object arry prototypes list are like push,pop,search


const rahul={
    salary: 1000
}

rahul.__proto__=student;



//Classes
class ToyotaCar{
    constructor(brand){
        console.log("Hi")
        this.brand=brand
    }
    start(){
        console.log("start")
    }  //comma is not need here
    stop(){
        console.log("stop")
    }
}

// let fortuner=new ToyotaCar();   //constructor is called automatically whenever a new object is created by class
// let nexus=new ToyotaCar();

// class child extends ToyotaCar{}  //inheritance
// let obj=new child()


let data="secret!"
class user{
    constructor(name,email){
        this.name=name;
        this.email=email
    }
    viewdata(){
        console.log("data=",data)
    }
}

let s1=new user("nishant","nish@gmail.com")
let s2=new user("pranav","pran@gmail.com")


class Admin extends user{
    constructor(name,email){
        super(name,email)
    }
    editdata(){
        data="some new value";
    }
}

let admin1=new Admin("admin","admin@gmail.com");


//Error Handling
// Syntax  try{
//    ....code} catch(err){
//     ...handling error
//    }

let a=5,b=10
try{
    console.log(a+c)  //c is not defined
} catch(err){
    console.log(err)
}