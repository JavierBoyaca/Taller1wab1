//Pide al usuario un numero y determina si es positivo o negativo y si es par o impar
/* var num = prompt("Ingrese un nummero : ");
var num2 = 2;
var resultado = 0;
var clase = 0;
var mod = num % num2;


if( num > 0 ){    
        resultado = "Positivos" } 
        if(num % num2 == 0)           
            {clase = "Pares"}
            if(num % num2 != 0){
                clase = "Impares"}                    
                if(mod<0){
                    resultado = "Negativos"}     
    
          
    
document.write(
`El numero ingresado es : ${num} <br>
 El numero corresponde a los numeros : ${resultado} <br>
 Y pertenece a los numeros :  ${clase} <br>
 El mod del este numero es : ${mod} <br>
----------------------------------------------------------------` 
); */

//Pide al usurio dos numeros y determina cual es el numero mayor y cual es el numero menor

/* var num1 = prompt("Ingrese un nummero : ");
var num2 = prompt("Ingrese un nummero : ");
var numMayor = 0;
var numMenor = 0;

if(num1 > num2 ){
    numMayor = num1
    
    
}
    else{
         numMayor = num2
        numMenor = num1}

document.write(
`El pirmer numero ingresado fue : ${num1} <br>
El segundo numero ingresado fue : ${num2} <br>
El numero mayor es : ${numMayor} <br>
El numero menor es : ${numMenor} <br>
----------------------------------------------`) */

//EJERCICIO 1. Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.

/* var suma = Number(prompt("Ingrese la cantidad de numeros a sumar : "));
var N = 0;
var acum = 0;

for(N = 0; N <= suma; N++){

   acum += N;
}
document.write(`El resultado de la suma de los N primeros numeros es ${acum} <br>
---------------------------------------------`) */

//EJERCICIO 2. Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).  
/* 
let estudiante = (prompt("Ingrese el nombre del estudiante : "));
let numNotas = Number(prompt("digite el numero de notas"));

let sumaNotas = 0;
for(let num= 1; num <= numNotas; num++){
let notas = Number(prompt("digite nota"));
sumaNotas = sumaNotas + notas;

}
let promedio = sumaNotas/numNotas;
if(promedio >= 3){
document.write("El estudiante " + estudiante + " GANO y su nota final es de: " + promedio.toFixed(2));

}else{
document.write("El estudiante " + estudiante + " PERDIO y su nota final es de: "  + promedio.toFixed(2));
} */

//EJERCICIO 3. Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.

/* let  suma = 0;
let cantidad = 0;
let number;

while(true){
    number = prompt("Ingrese un numero entero o fin para salir");
    
    if (number.toLocaleLowerCase() == "fin"){
        break;
    }
    if(!isNaN(number) && Number.isInteger(parseFloat(number))){
        suma += parseInt(number)
        cantidad ++;
    }else{
        alert("Ingrese un entero valido o Fin para terminar")
    }
} 

document.write(`cantidad de numeros ingresados:  ${cantidad} \nSuma de los numeros enteros: ${suma}`) */

//EJERCICIO 4. Realice una tabla de multiplicar con cualquier número ingresado hasta el 30.

/* let multiplicar = Number(prompt("Ingrese el numero a multiplicar: "));
let i;
let cont;

while( i >= 1 && i <= 30){
    
    cont=30;
    multiplicar = multiplicar * cont;
    cont --

   }
   document.write(multiplicar* cont ) */
/* 
   let numero = prompt ("Ingrese el numero para generar la tabla de multiplicar");

    if (!isNaN (numero)  && numero > 0 && numero <=30 ){
        document.write(`Tabla de multiplicar del numero: ${numero} <br>`);
        for (let i = 1; i <=30; i++){
            document.write(`${numero} * ${i} = ${numero *i} <br> `);
        }
    } else {
        document.write("Inrese un numero entre 1 y 30")
    }  */

    //EJERCICIO 5. Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.

 /*    let numero = prompt("ingrese numero a multiplicar ") ;

     document.write(`tabla de multiplicar descendente del numero: ${numero} <br>`);
     for(let i = 10; i>=1; i--){

        document.write(`${numero} * ${i}= ${numero * i } <br>`);
     } */

     //EJERCICIO 6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.
    /*  let numero = Number(prompt("ingrese numero para intervalo"));
     if(!isNaN (numero) && numero >0){
        document.write(`Tabla de intervalos del numero ingresado: ${numero} <br>`);
         for(let i = 1; i <=30; i+= numero){
             document.write(`${i}<br>`);
         }
         
         
     }
     else{
         document.write ("El numero ingresado no es valido ");
 
     } */

     //EJERCICIO 7.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.

     let numero=parseInt(prompt("ingrese un numero:"));

if(isNaN(numero)){
alert ("ingres un numero valido ")

}
else {
    for(let i = 30;i >0;i -= numero){
        document.write(`${i}<br>`);

    }
   
}