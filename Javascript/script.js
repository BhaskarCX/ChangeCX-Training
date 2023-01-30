function prom(complete){
    return new Promise(function(resolve,reject)
{
    console.log("fetching data , please wait!!");
    setTimeout(()=>)
    
    
    
    
});

}

let onFulfilmet =(result)=>{
    console.log(result);
}
let onRejection =(error)=>{
    console.log(error);
}
prom(true).then(onFulfilmet);
prom(false).catch(onRejection);
 
