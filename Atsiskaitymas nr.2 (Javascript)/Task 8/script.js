/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {

    sum(a,b){    
        return a+b;
    }
    subtraction(a,b){
        return a-b;
    }

    multiplication(a,b){
        return a*b;
    }

    division(a,b){
        return a/b;
    }
}

const calcuator1 = new Calculator();

console.log(calcuator1.sum(1,10));
console.log(calcuator1.subtraction(1,10));
console.log(calcuator1.multiplication(1,10));
console.log(calcuator1.division(1,10));