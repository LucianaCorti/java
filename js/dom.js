let tituloPrincipal = document.getElementById("tituloPrincipal");
tituloPrincipal.innerText = "Tienda online Bali - Objetos para tu hogar";

function crearSubtitulo() {
  const subtitulo = document.getElementById("subtitulo");
  subtitulo.innerHTML =
    "<p>A continuación vas a poder seleccionar los productos deseados:</p>";
}
crearSubtitulo();

function crearTablaProductos() {
  const tabla = document.getElementById("tablaProductos");
  listaProductos.forEach((producto) => {
    tabla.innerHTML += `<tr>
        <th scope="row">${producto.id}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        </tr>`;
  });
  listaProductos.sort();
}

crearTablaProductos();
