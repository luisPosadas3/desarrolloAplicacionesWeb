document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("infoForm");
  const nombreInput = document.getElementById("nombre");
  const apellidosInput = document.getElementById("apellidos");
  const edadInput = document.getElementById("edad");
  const infoBox = document.getElementById("cajaInfo");
  const userInfo = document.getElementById("informacion");
  const closeBtn = document.getElementById("btnCerrar");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const edad = parseInt(edadInput.value.trim(), 10);

    if (nombre === "" || apellidos === "") {
      alert("Por favor, completa los campos de nombre y apellidos.");
      return;
    }

    if (isNaN(edad) || edad <= 0) {
      alert("La edad debe ser un número mayor a 0.");
      return;
    }

    informacion.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Apellidos:</strong> ${apellidos}</p>
      <p><strong>Edad:</strong> ${edad}</p>
    `;
    cajaInfo.classList.remove("hidden");
  });

  btnCerrar.addEventListener("click", function () {
    cajaInfo.classList.add("hidden");
    form.reset();
    nombreInput.focus();
  });
});
