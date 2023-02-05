//Voici comment utiliser une fonction
//alert("Benoit");

//Ceci est embetant a faire, vaut mieux une fonctions
let ageTony = 12, ageSosa = 10;
let sum = ageTony + ageSosa;
let sum2 = 20 + ageSosa;
console.log("somme: " + sum)
console.log("somme: " + sum2)

//Voici comment définir une fonction 
//Une fonction qui va faire une somme avec 2 paramètres
function somme(a, b){
	let c = a + b;
	console.log("c = " + c)
}
somme(22, 22)



function somme2(x, y){
	let z = x * y;
	return z; //si il y a pas de return mais un console.log("somme2 " + z)
	//alors la variable toto est undifined(car renvoi sur rien)
}
let toto = somme2(40, 2);
console.log("toto " + toto)


function au_carre(i){
	let p = somme2(i, i);
	return p;
}
let carre = au_carre(10);
console.log("carre = " + carre)


//Fonction qui calcul une surface d'une pièce au carré
function calculSurfacePieceCarre(cote){
	let j = au_carre(cote);
	return j;
}
let surface = calculSurfacePieceCarre(12);
console.log("surface = " + surface)