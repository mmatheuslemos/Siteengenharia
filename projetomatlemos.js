//Aprendendo Java Script
//alert("hello World"); (Caixa de alerta escrita hello world)
//prompt("hi there"); (Perguntando para digitar algo)
//confirm('h world'); (Perguntando para confirmar)
//this is a single-line comment.
//var tj; (Variável indefinida)
//alert(tj)
//var foo = null;
//alert (foo);
//var tp = 5;
//alert (tp+tp); (Irá aparecer a soma que o resultado é 10)
//var foo = "five";
//alert (foo); (Irá aparecer a string "five")
//var foo = [5, 10, 20]; //declarando um array
//alert (foo[0]) //irá pegar o primeiro elemento do array.
//alert(5 != 5); //irá a aparecer a resposta false (5 não é diferente de 5)
//alert(5 == 5); //irá a aparecer a resposta verdade (5 é igual a 5)
//alert(5 < 1); //irá apararecer falso ( 5 é maior que 1)

//Utilizando o if ()
//if(1<2){
    //alert("hello");
//}    (Se 2 for maior que 1, logo aparecerá na tela o alerta)
//var test = "hijo";
//if( test == "h"){
    //alert ("You haven't changed anything");
//}else{
    //alert ("You've changed something!")
//}

//Utilizando o for()
//var items =["foo", "bar", "baz"];
//for (var i=0; i<items.length; i++){
    //alert( items[i]);
//}
//Native functions alert(), confirm (), and prompt (), Date(), parseInt ("123"), setTimeout(functionName, 5000)
//function primeirafuncao (){
    //Our function code goes here
//}

//Funções do Java script
//function foo(){
    //alert("Hello Word");
//}
//foo();

//Testando primeira função (retorna o número de elementos dentro do array)
//var test = [1,2,3,4,5];
//function alertArraySize(arr){
    //alert(arr.length);
//}
//alertArraySize(test);

//Testando função soma de números
//function soma(a,b){
    //return a+b
//}
//var t = 5;
//var g = 10;
//alert(soma(t,g));

//Apresentar parte hello//
//function execu() {
    //alert("hello");
//}
//window.onclick = execu;

//Apresentar hello no prompt passando o mouse por cima da janela
//window.onmouseover = function(){
    //prompt("Hello");
//}

//Usando o addeventlistener para chamar função
//function hj(){
    //prompt("hello world");
//}
//window.addEventListener("click", hj);

//Meet The Dom (Document Object Model)

//var foo = document.getElementById("jk").innerHTML;
//var heading1 = document.getElementsByTagName("h1");
//var paragraphs = document.getElementsByTagName("p1");
//var imagelogo = document.getElementsByClassName("logs");

//console.log(heading1);
//console.log(paragraphs);
//var sidebar = document.querySelectorAll("h3"); //Acessa os nós do DOM no CSS
//console.log(sidebar);

//var bigimage = document.getElementById("imak"); //Variável recebe o elemento do documento pelo ID.
//alert (bigimage.getAttribute("src")); //Alert irá aparecer o atributo do elemento da imagem src.
//console.log(bigimage);

//Mudando a imagem pelo atributo//
//var bigimage = document.getElementById("imak");
//bigimage.setAttribute("src", "Imagensgera/Imagens_2 - Foto.jpg");

//Usando o inner HTML
//var introdiv = document.getElementsByClassName("parteden");
//introdiv[0].innerHTML = " this is our intro text";

//Mudando Style mudar cor do fundo da letra.
//function mudarcor(){
    //document.getElementById("jk").style.backgroundColor = "#f58220";
//}
//window.onclick = mudarcor;

//Mudando Style mudar cor da letra
//function mudarcor(){
    //document.getElementById("jk").style.color = 'black';
//}
//window.onclick = mudarcor;

//Criando elementos pelo DOM.
//var newDiv = document.createElement("h1"); (Está criado mas não aparece na tela)
//Criando um texto dentro do elemento que foi criado ou existente.
//var ourText = document.createTextNode("this is our tex.");
//Colocando os elementos e o texto no html para aparecer//
//var ourDiv = document.getElementById("partba");
//var newparagrafh = document.createElement("p");
//var copy = document.createTextNode("Hello, world!");
//newparagrafh.appendChild(copy)
//ourDiv.appendChild(newparagrafh);



