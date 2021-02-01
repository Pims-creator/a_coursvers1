// let numberA=Math.floor(Math.random()*100);
// console.log(numberA);

// let numberB;

// console.log(numberB);

// while (numberA != numberB) {
// numberB=parseInt(prompt("choisissez un nombre entre 0 et 100"));

//   if (numberA < numberB){
//   console.log("moins");
//   }
//   else if(numberA>numberB{
//   console.log("plus");
//   }


// }
// console.log("gagnée");

// let etoile=("*");
// for (let i=0 ; i<5 ; i++ ) {
//     console.log(etoile)
//     etoile = etoile + ("*")
//     }
    
// let nbnote = parseInt(prompt("combien de notes a rentrer")); 
// let tab =[]
// let somme = 0


// for (let i = 0 ; i < nbnote ; i++) {
//     tab[i] = parseInt(prompt("quel note a entrer")); 
//     while (tab[i]<0 || tab[i]>20){
//         tab[i] = parseInt(prompt("quel note a entrer entre 0 et 20"));
//     }
//     console.log(tab[i]);
//     somme = tab[i]+ somme ;
// };
// console.log(somme / nbnote);


let numberA=2;
let numberB=parseint(prompt("entrer un nombre"));
let numberC = (numberB % numberA);
if (numberC == 0){
    console.log("le nombre est pair");
}
    else{
        console.log("le nombre est impair");
    };