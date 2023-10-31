let cadena = ""
let texto

do {
  texto = prompt("Ingresa un texto:")
  if (texto !== null) {
    cadena += texto + "-";
  }
} while (texto !== null)

i