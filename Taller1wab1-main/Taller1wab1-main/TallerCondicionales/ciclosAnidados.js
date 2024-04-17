// //series
// var temporada = Number(prompt("Digite numero de temporadas"));

// for(var x = 1; x<= temporada; x++){
//     //Instruccion inicial
//     document.write("Temporasa # "+x+" <br>" );
//     var capitulos = Number(prompt("Digite el numero de capitulos, \n Temporada #" + x))
//     for(var y = 1; y<= capitulos; y++){
//         //instruccion inicial
//         document.write("Capitulo #"+y+" <br>");
//     }
//     //instruccion final
//     document.write("-------------------------- <br>")

// }

// //Piramide punta arriba
//  var altura = Number(prompt("Digite la altura de la piramide"));
//  for (var x = 1; x <= altura; x++){
//     for(var y = altura; y >= x; y--){
//         document.write("*");
//     }
//     //instruccion final
//     document.write("<br>")
//  }

//Funciones
// function decirNombre(nom){
//     document.write("Hola, " + nom);
// }
// var nombre = prompt("Digite un nombre")
// //ejecutar
// decirNombre (nombre);

// function sumar (n1, n2){
//     //procedimiento
//     return n1 + n2;
// }
// var num1 = Number(prompt("Digite un numero"));
// var num2 = Number(prompt("Digite otro numero"));
// var resultado = sumar(num1,num2)

// document.write("el resultado de la suma es" + resultado);

// function operaciones (n1, n2, op){
//     if(op == "+"){
//         return n1 + n2;
//     } else if (op == "-"){
//         return n1 - n2;
//     } else if (op == "*"){
//         return n1 * n2;
//     } else if (op =="/"){
//         return n1 / n2;
//         }
//     else{
//         return ("El operador no es valido")
    
// }
// }
// //ejecutar funcion
// var num1 = Number(prompt("Digte un numero"));
// var num2 = Number(prompt("Digite otro numero"));
// var signo = prompt("digite el signo");

// var resultado = operaciones(num1, num2, signo);
// document.write(`${num1} ${signo} ${num2} = ${resultado}`);

// function pedirNombre (){
//     var nombre = prompt("Digite un numero");
//     return nombre;
// }
// function mostrarNombre (info){
//     document.write("El nombre digitado es:" +nom)
// }

// //ejecutar funciones
// var nombre = pedirNombre ();
// mostrarNombre(nombre);