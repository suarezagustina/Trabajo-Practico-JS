const numero1 = parseInt(prompt("Ingrese un primer numero"))
const numero2 = parseInt(prompt("Ingrese un segundo numero"))
const numero3 = parseInt(prompt("Ingrese un tercer numero"))

if 
(numero1 > numero2 && numero1 >numero3 ) 
{
  document.write(`El número 1 (${numero1}) es mayor que el número 2 (${numero2}) y 3 (${numero3})` )
}else if
( numero3 > numero2)
{
    document.write(`El número 3 (${numero3}) es mayor que el número 2 (${numero2}) y 1 (${numero1})` )
}else if
( numero2 > numero3)
{
    document.write(`El número 2 (${numero2}) es mayor que el número 3 (${numero3}) y 1 (${numero1})` )
}else{
    document.write(`Los numeros ingresados son iguales (${numero2})` );  
}