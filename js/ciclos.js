// Calculador de cuotas
let valorProducto = 0
let cuota = 0
let valorCuota = 0

debugger
alert ("Calcule las cuotas de su compra!")
valorProducto = parseFloat(prompt("Ingresa el valor del producto adquirido:"))
cuota = parseFloat(prompt("Ingresa la cantidad de cuotas que desea: 1, 3, 6, 12 o 18"))
valorCuota = calcular(valorProducto, cuota)
console.log("Valor de la cuota según la cantidad seleccionada:$", valorCuota)
alert ("Valor de la cuota según la cantidad seleccionada:$" + " " + valorCuota)

function calcular(valorProducto, cuota) {
switch (cuota) {
    case 1:
        return valorProducto
    case 3:
        return valorProducto / 3
    case 6:
        return valorProducto / 6
    case 12:
        return valorProducto / 12
    case 18:
        return valorProducto / 18
    default:
        return "Incorrecto, vuelva a intentarlo"
}
}
