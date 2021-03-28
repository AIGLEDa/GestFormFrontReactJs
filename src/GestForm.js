import React from 'react'

export default function GestForm() {
    //initialiser la valeur à 0
var valueFor5 = 0;

//initialiser la valeur à 0
var valueFor3 = 0;

//initialiser un tableau vide
var randomNumber =[];

//function qui donne une valeur aléatoire entre -1000 et 1000
function getRandom(min, max) {
    var numberFloat = Math.random() * (max - min) + min;
    return Math.round(numberFloat);
  }

  //boucle for pour la donné dans l'index du tableau
  for(let i = 0; i < 10; i++)
  {
      // placer la valeur à l'index i
    randomNumber[i] = getRandom(-1000, 1000);
  }
  
  //boucle for pour tourner 20 fois le programme
  for(let j=0; j<20; j++)
  {
      //modulo avec 5
    valueFor5= randomNumber[j]%5;

    //modulo avec 3 
    valueFor3= randomNumber[j]%3;

    // si la valeur est 0 ou -0 donc on affiche Form
      if(valueFor5 === 0 || valueFor5 === -0 )
      {
          //afficher Form
          alert("Form")
      }

      // si la valeur est 0 ou -0 on affiche Gest
      if(valueFor3 === 0 || valueFor3 === -0 )
      {
          //afficher Gest
          alert("Gest")
      }

      //si valeur est correct pour les deux donc on affiche le mot entier. Divisble par 3 et 5
      if((valueFor5===0 || valueFor5 === -0) && (valueFor3 ===0 || valueFor3 === -0))
      {
          //afficher gestform
          alert("GestForm")
      }

      // si correspond pas divisible par 3 et 5 donc on affche la valeur
      if((valueFor5 !=0 || valueFor5 !=-0 )&& valueFor3 != 0 || valueFor3 != -0)
      {
          //afficher la valeur.
          alert(randomNumber[j])
      }
  }

    return (
        <div>
            
        </div>
    )
}
