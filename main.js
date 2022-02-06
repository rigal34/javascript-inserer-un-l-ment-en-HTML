let parent = document.getElementById("menu");

let item = document.createElement("li");//j'ai créer un élément li dans ma console
//console.log(item);
item.textContent = "bruno";//à l'intérieur de mes balise je mets un texte qui contien bruno
console.log(item);

//la variable camion prends et vise le 1er elément = "home" et remplacer ces 2 enfants qui suivent par le texte contenu "bruno"
let camion = parent.firstElementChild.nextElementSibling;

parent.replaceChild(item, camion);

let element = document.getElementById("intro");//je vais chercher intro

let html = "<h1>Nouveau h1</h1>";

element.insertAdjacentHTML('afterend',html);//dans html insert en position afterbegin la variable html



