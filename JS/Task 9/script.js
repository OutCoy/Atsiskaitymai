/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive(){
        if(this.budget > 100000000){
            return true;
        } else {
            return false;
        }
    }
}

const testFalse = new Movie('Title', 'Director', 100000);
const testTrue = new Movie('Title', 'Director', 10000000000000);

console.log('False (budget: 100000): ', testFalse.wasExpensive());
console.log('True (budget: 10000000000000): ', testTrue.wasExpensive());