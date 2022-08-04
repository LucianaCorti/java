///Tienda Online

function ingresoDatos() {
  alert("Bienvenida/o a la tienda online Bali");
  let nombreUsuario = prompt("Ingrese su nombre");
  while (nombreUsuario === "") {
    nombreUsuario = prompt("Para continuar debe ingresar su nombre:");
  }
}

function catalogoProductos() {
  let productoCatalogo;
  do {
    productoCatalogo = prompt(
      " Productos disponibles: 1- Vela aroma vainilla  2- Sahumerios aroma coco  3- Difusor aroma lima  4- Humidificador"
    );
  } while (
    productoCatalogo != 1 &&
    productoCatalogo != 2 &&
    productoCatalogo != 3 &&
    productoCatalogo != 4
  );
  switch (productoCatalogo) {
    case "1":
      return "Vela aroma vainilla";
    case "2":
      return "Sahumerios aroma coco";
    case "3":
      return "Difusor aroma lima";
    case "4":
      return "Humidificador";
  }
}

function mostrarPrecio(producto) {
  if (producto == "Vela aroma vainilla") {
    return 800;
  } else if (producto == "Sahumerios aroma coco") {
    return 650;
  } else if (producto == "Difusor aroma lima") {
    return 780;
  } else if (producto == "Humidificador") {
    return 1200;
  }
}

function cobroFinal(producto, precio) {
  alert(
    "Seleccionó el siguiente producto : " +
      producto.toLowerCase() +
      "Precio $ " +
      precio
  );
  let pago = prompt("Con cuánto va a abonar ? ");
  if (pago > precio) {
    alert(
      "Su vuelto es $" + (pago - precio) + ",Muchas gracias por su compra!"
    );
  } else if (pago == precio) {
    alert("Muchas gracias por abonar exacto!");
  }
  if (pago < precio)
    alert("Quitaremos el producto de tu carrito por falta de pago!");
}

ingresoDatos();
let productoSeleccionado = catalogoProductos();
let precioProducto = mostrarPrecio(productoSeleccionado);
cobroFinal(productoSeleccionado, precioProducto);
