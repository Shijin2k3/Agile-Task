const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter first number : ", n1 =>{
   rl.question("Enter an Operator , eg (+,*,-,/) : ",operator =>{
     rl.question("Enter second number : ",n2 =>{
        const a=parseFloat(n1);
        const b=parseFloat(n2);

        if(isNaN(a) || isNaN(b) ){
            console.log("Invalid input.");
        }
        else{
            let result;
            switch(operator){
                case "+":
                    result= a + b ;
                    break;
                case "-":
                    result= a - b ;
                    break;
                case "*":
                    result= a * b;
                    break;
                case "/":
                    if(b === 0){
                        console.log(" Error : Division by Zero ");
                        rl.close();
                        return;
                    }
                    result= a / b;
                    break;
                default:
                    console.log("Invalid Operator");
                    rl.close();
                    return;
            }

         console.log(` ${a} ${operator} ${b} = ${result}`);
        }
        rl.close();
     })

   })
    
})
