let n= 10;

for(let i=1;i<=n;i++){
    if(i===1 || i == n)
    {
        console.log(' * '.repeat(n))
    }
    else{
        console.log(" * " +"   ".repeat(n-2)+" * " )
    }
}