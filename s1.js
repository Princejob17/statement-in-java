let m=1;
let n=100;
for(let i=m;i<=n;i++){ 
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%5==0){
        console.log("Buzz");
        
    }else if(i%3==0){
        console.log("FIzz");
        
    }else{
        console.log(i);
        
    }

}