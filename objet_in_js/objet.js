//Voici comment créer un objet:
let une_variable_random = "Benoit";
let un_objet = {key: "toto", key2: "autre valeur", key2: 25, une_variable_random: "Tom"};

console.log(typeof(une_variable_random));
console.log(typeof(un_objet));

//Voici comment accèder aux clés d'un objet:
un_objet.key;
console.log(un_objet.key);
console.log(un_objet.une_variable_random);

//Voici comment également accèder aux clés d'unn objet:
un_objet['key'];
console.log(un_objet['key']);

//Voici comment modifier les clés avec la première et la deuxième technique:
un_objet.key = "hello";
console.log(un_objet.key);

un_objet['key'] = 'hello there';
console.log(un_objet.key);



//Voici deux autres façon de  créer un objet:
let objet_nouveau = {};
objet_nouveau.name = "DominiK";
objet_nouveau.age = 25;

let objet_renaissance = new Object();
objet_renaissance.name = "Roberto"
objet_renaissance.age = 32
objet_renaissance.city = "Paris"



//Nous pouvons rajouter une fonction
objet_renaissance.say_hello = function(){
	console.log("Hello " + this.name);
}
objet_renaissance.say_hello();



//Boucler sur chaques clés de l'objet qui sont stocké dans prop
for(let prop in objet_renaissance){
	console.log("Le nom de la clé; " + prop);
	//et voici comment accéder au valeur de chaques clés
	console.log("Le nom de la valeur; " + objet_renaissance[prop])
}



//on exécute la fonction grâce au ()
let objet_new = new Object();
objet_new.name = "Joe"
objet_new.age = 80
objet_new.city = "Washigton"
objet_new.say_hello = function(){
	console.log("Hello " + this.name);
}
objet_new.say_hello();

for(let abc in objet_new){
	console.log("--------------------------------------------");
	console.log("Le nom de la clé; " + abc);
	console.log("Le nom de la valeur; " + objet_new[abc]);
	if(typeof(objet_new[abc]) === "function"){
		objet_new[abc](); //Execute la fonction say_hello
	}else{
		console.log(abc + " N'est pas une fonction");
	}
}