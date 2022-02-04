const a = 180
const b = 60
const c = 2

const soma = a + b + c
const positivo = a > 0 && b > 0 && c > 0

if(positivo){
   if (soma == 180) {
    console.log(true);
    }
else {
    console.log(false); 
    }
}

else {
    console.log("erro");
}