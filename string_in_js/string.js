let a = "Ben";

//concaténation
let b = 'Hello ' + a;
console.log(b)
let c = `Hello 
${a}`
console.log(c)

//Primitif
let d = String("Mike");
console.log(d)

//Objet (a éviter)
let e = new String("Adam")
console.log(e)
console.log(typeof(e))
console.log(e instanceof String) //e est de type objet string, return true, et ne fonctionne que pour les objets


//Plein de méthodes
let str = "Hello, i'm there !";
str.charAt(7) //donne moi le caractère à telle position
console.log("str.charAt = " ,str.charAt(7))

//retourne moi (le premier l) l'index de telle chaine de caractère
str.indexOf('l')
console.log("str.indexOf('l') = " ,str.indexOf('l'))
console.log("str.indexOf('there') = " ,str.indexOf('there'))

str.lastIndexOf('l')
console.log("str.lastIndexOf('l') = " ,str.lastIndexOf('l'))

//Remplacer des chaine de caractère ou caractère
str.replace('there', 'surgeon')
console.log("str.replace('there', 'surgeon') = " ,str.replace('there', 'surgeon'))

//split permet de prendre ta chaine de caractère, la découper et la mettre dans un tableau
//créer un tableau a 4 élements
let ar = str.split(' ');
console.log(ar)

let idx = "1|5|40|25|788";
let arr = idx.split('|');
console.log(arr);

//ET faire l'inverse (en array en est bien d'accord) comme ceci:
let string = arr.join();
console.log(string);

