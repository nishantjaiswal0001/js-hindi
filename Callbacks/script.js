function sum(a,b){
    console.log(a+b)
}

function calculator(a,b,sumCallback){
   sumCallback(a,b);
}

// calculator(89,67,sum)

function getdata(dataid,getnextdata){
    //2s
    setTimeout(()=>{
        console.log("data",dataid)
        if(getnextdata){
            getnextdata()
        }
    },2000)
}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3)
    })
})