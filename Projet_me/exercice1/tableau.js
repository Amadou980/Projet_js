

'use strict'

/*Declarer le tableau d'entiers*/
let tab = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


/*fonction qui prend en argument a et b et retourne 
la somme des entiens entre a et b inclus [a---b]
on parcour le tableau et on somme les éléments que l'on stocke dans 
une variable somme, que l'on renvoie à la fin*/
function somme(a,b) {
 let somme = 0;
    for (let i = 0; i < 10; i++) {    
        if (tab[i] >= a && tab[i] <= b) {
            somme =somme+tab[i];
        }
    }
    return somme;
}

/*on fait appelle à la fonction somme avec les valeurs a et b*/
console.log(somme(30,60));