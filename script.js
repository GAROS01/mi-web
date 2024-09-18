// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el formulario y añade un evento de 'submit'
  const form = document.getElementById("searchForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores de los campos del formulario
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;

    // Muestra un mensaje con los datos ingresados
    alert(
      `Destino: ${destination}\nFecha: ${date}\nNúmero de personas: ${people}`
    );

    // Aquí puedes añadir más funcionalidad, como enviar los datos a un servidor o limpiar el formulario
  });
});
