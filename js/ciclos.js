class ProductosTienda {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const listaProductos = [];

function agregandoArray() {
  listaProductos.push(new ProductosTienda(1, "Vela aroma vainilla", 800));
  listaProductos.push(new ProductosTienda(2, "Vela aroma sándalo", 800));
  listaProductos.push(new ProductosTienda(3, "Sahumerio aroma coco", 650));
  listaProductos.push(new ProductosTienda(4, "Difusor aroma lima", 780));
  listaProductos.push(new ProductosTienda(5, "Humidificador", 1200));
  listaProductos.push(new ProductosTienda(6, "Sahumador", 1550));
}

agregandoArray();
