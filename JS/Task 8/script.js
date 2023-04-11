/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    constructor(){
    }

    sum(num1, num2){
        return num1 + num2;
    }

    subtraction(num1, num2){
        return num1 - num2;
    }

    multiplication(num1, num2){
        return num1 * num2;
    }

    division(num1, num2){
        return num1 / num2;
    }
}

const test = new Calculator();
console.log(test.sum(20, 10), test.subtraction(20, 10), test.multiplication(20, 10), test.division(20, 10));