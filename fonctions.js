// Fonction qui efectue la somme de deux numeros

function sum(a, b){
    console.log(a +b);
}
 sum(10, 2);

 function multipl(a, b){
    return a * b;
 } 
console.log(multipl(5, 5)); 

//Valeur par default

function sum(a, b =10){
    console.log(a +b);
}
 sum(10);

 // Arrows
const sumArrow = (a, b) => a + b;
console.log(sum(2, 5));





