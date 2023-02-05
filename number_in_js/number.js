// type primitif, a utilisé au max
let a = 123;
let b = 1.25;
let c = "122";
console.log("a est de type " + typeof(a));
console.log("b est de type " + typeof(b));
console.log("c est de type " + typeof(c));

const d = Number('123');
if (d === 123){
	console.log('hello')
}
console.log("d est de type " + typeof(d));


// type objet, attention ! Déconseillé de l'utilisé
const e = new Number('123');
if (e === 123){
	console.log('hello ther')
}
console.log("e est de type " + typeof(e));


//beaucoup de constantes primitive qu'on apelle number
let f = Number('342')
console.log("Number.MAX_VALUE" ,Number.MAX_VALUE);

//NaN
const name = Number('toto');
console.log("name isNaN? " ,Number.isNaN(name));

//savoir si c'est integer
console.log("a est un integer? " ,Number.isInteger(a));

//cette méthode permet de convertir une chaine de caractère
console.log("c est de type " + typeof(c));
c = Number.parseInt(c) //écraser C pour le transformer en integer
console.log("c est de type " + typeof(c));



console.log('Number' ,Number("1.1"));
console.log('Number' ,Number("1.00"));
console.log('Number' ,Number("1e-2")); //Exponentiel
console.log('Number' ,Number("")); //conveti en 0
console.log('Number' ,Number("0x11")); //hexadecimal
console.log('Number' ,Number("0b11")); //binaire
console.log('Number' ,Number("0o11")); //octal
console.log('Number' ,Number("toto")); //NaN
console.log('Number' ,Number("100t")); //NaN