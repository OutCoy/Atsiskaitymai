/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    sum(){
        return this.num1 + this.num2;
    }

    subtraction(){
        return this.num1 - this.num2;
    }

    multiplication(){
        return this.num1 * this.num2;
    }

    division(){
        return this.num1 / this.num2;
    }
}

const test = new Calculator(20, 10);
console.log(test.sum(), test.subtraction(), test.multiplication(), test.division());