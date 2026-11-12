// FUNCION PARA SUMAR DOS NUMEROS
function sumar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById("total").textContent =
        "El resultado de la suma es: " + resultado
}