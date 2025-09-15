// Obtengo el elemento donde se mostrarán los resultados.
const resultadosDiv = document.getElementById("resultados");

// Le pido al usuario que ingrese tres números.
const primerValor = parseInt(prompt("Ingresa el primer número:"));
const segundoValor = parseInt(prompt("Ingresa el segundo número:"));
const tercerValor = parseInt(prompt("Ingresa el tercer número:"));

// Verificamos si los valores ingresados son números válidos.
if (isNaN(primerValor) || isNaN(segundoValor) || isNaN(tercerValor)) {
  resultadosDiv.innerHTML = "<p>Error: Por favor, ingresa solo números.</p>";
} else {
  // Comprobamos si los números son iguales.
  if (primerValor === segundoValor && segundoValor === tercerValor) {
    resultadosDiv.innerHTML = "<p>Los tres números son iguales.</p>";
  } else {
    // Si no son iguales, los ordena.
    const numeros = [primerValor, segundoValor, tercerValor];
    const ordenAscendente = [...numeros].sort((a, b) => a - b);
    const numeroMenor = ordenAscendente[0];
    const numeroCentro = ordenAscendente[1];
    const numeroMayor = ordenAscendente[2];

    // Crea el contenido HTML que se mostrará en la página.
    let contenidoHTML = `
      <p>El número mayor es: <strong>${numeroMayor}</strong></p>
      <p>El número de en medio es: <strong>${numeroCentro}</strong></p>
      <p>El número menor es: <strong>${numeroMenor}</strong></p>
      <br>
      <p>Números ordenados de mayor a menor:</p>
      <p><strong>${numeroMayor}, ${numeroCentro}, ${numeroMenor}</strong></p>
      <br>
      <p>Números ordenados de menor a mayor:</p>
      <p><strong>${numeroMenor}, ${numeroCentro}, ${numeroMayor}</strong></p>
    `;
    
    // Muestra el contenido en la página.
    resultadosDiv.innerHTML = contenidoHTML;
  }
}