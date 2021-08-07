/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

function Movie(title,director,budget) {
this.title=title;
this.director=director;
this.budget=budget;
this.wasExpensive = function(){
    var res;
    if(budget>100000000){
        res=true;
    }else{
        res=false;
    }
    return res;
}
}


const movie1 = new Movie("Titanikas","Adomas",100000);
console.log(movie1);

const movie2 = new Movie("Bombardierius","Adomas2",1000000000000000);
console.log(movie2);