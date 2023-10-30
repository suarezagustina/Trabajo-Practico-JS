let numero1 = prompt("Introduce el 1er numero:");
let numero2 = prompt("Introduce el 2do numero:");
if 
(parseInt(numero1) > parseInt(numero2)) 
{
    document.write(numero1 + " es mayor que " + numero2);
} else if 
(parseInt(numero1) < parseInt(numero2)) 
{
    document.write(numero2 + " es mayor que " + numero1);
} else 
{
    document.write("Los numeros son iguales");
}