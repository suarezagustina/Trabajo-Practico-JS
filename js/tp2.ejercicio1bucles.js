let edad
while (isNaN(edad)) {
  try {
    edad = parseInt(prompt("Edad:"))
  if (isNaN(edad)) 
  {
      throw new Error("La edad ingresada no es un número válido.")
    }
  } catch (error) 
  {
    alert(error.message)
  }
}
if (edad >= 18) {
  alert("Puedes conducir")
}
