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
/////////
//punto10
// var clientes = prompt("¿Deseas realizar una compra? si/No");
// var contaClientes = 0;
// var totalCompra = 0
// for(var x = 1; clientes != "no"; x++){
//     document.write("Cliente#"+x+"<br>");
//     var NumPro = Number(prompt("¿Cuantos producos quiere comprar?"));
//     var totalCompra = 0
//     for(var y=1; y <= NumPro; y++){
//         var nombrePro = prompt("Digite el nombre del producto")
//         var precioPro = Number(prompt("Digite el valor del producto #"+y));
//         document.write("Precio"+nombrePro+ "#"+y+":"+precioPro+"<br>");
//         totalCompra+=precioPro; 
//     }
//     contaClientes++;
//     document.write("------------------<br>");
//     document.write("total compra: "+totalCompra+"<br>");
//     clientes = prompt("¿Desea realizar una compra? si/no");

    
// }
// document.write("------------------ <br>");
// document.write("Total Clientes del dia:"+contaClientes+"<br>");
// document.write("Total General del dia:"+totalComprasXdia+"<br>")

//////////////////////////////////////
// //punto12
// var filas = Number(prompt("Digite total de filas de la tabla"));
// var columnas = Number(prompt("Digite total de columnas de la tabla"));
// var contar = 1;
// document.write("<table border= '1'>");
// for (var x = 1; x <= filas; x++);{
//     document.write("<tr>");
//     for(var y = 1; y <= columnas;y++){
//         document.write("<td>");
//         document.write(contar++);
//         document.write ("</td>");
//     }
//     document.write("</tr>");
// } 
// document.write("</table>");

//FUNCIONES

// var numeroRandon = Math.random() * 10;
// document.write("el numero aleatorio es:" +numeroRandon.toFixed(0));
  
// function saludar(nombre){
//     document.write("hola,"+nombre+"<br>");
// }
// function pedirNombre(numero){
//     for(var x= 1; x<= numero; x++){
//         var nombres = prompt("digite nombre"+x);
//         saludar(nombres);
//     }
// }
// //llamar funcion
// var totalNombres = Number(prompt("Digite cuantos saludos desea generar"))
// pedirNombre(totalNombres);

//FUNCION CALCULAR IVA
function pedirProductos(numPro){
    var totalCompra = 0
    for (var x = 1; x<=numPro; x++){
        var nombrePro=prompt("Digite nimbre del producto");
        var precioPro = Number(prompt("Digite precio del producto"));
        var canPro = Number(prompt("Digite cantidad del porducto"+nombrePro));
        var totalPro = precioPro*canPro
        document.write(x+" "+nombrePro+" $"+precioPro+"X"+canPro+" = "+totalPro+"<br>");
        totalCompra+=totalPro;
    }
    return totalCompra;
}
function calcularIva( total ){
    var porcenIva = total * 19/100
    var totalconIva = porcenIva+ total;
    document.write("-------------------------------<br>");
    document.write("total compra es:"+total+"<br>");
    document.write("total compra con Iva:"+totalconIva+"<br>");
}

var numeroProductos = Number(prompt("Digite el numero de productos a comprar"));
var totaldeCompra = pedirProductos(numeroProductos);
calcularIva(totaldeCompra);


