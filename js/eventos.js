const fomularios = document.querySelectorAll("input");

function fondoInput() {
  fomularios.forEach((formulario) => {
    formulario.addEventListener("click", () => {
      formulario.className = "fondoColor1";
    });
    formulario.addEventListener("blur", () => {
      formulario.className = "fondoColor2";
    });
  });
}

fondoInput();
