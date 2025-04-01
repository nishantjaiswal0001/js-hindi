// function hello(){
//     console.log("Hello")
// }
// setTimeout(hello,4000);

//or
// setTimeout(()=>{
//     console.log("Hello")
// },1000);

console.log("a");
console.log("b");
setTimeout(()=>{
    console.log("Hello")
},3000);
console.log("c");   //this line doesn't depend on execution of upper call "hello" thus it is async whereas in sync this line waits untill the above code execute 
console.log("d");
console.log("e");
