function enviarFormulario(event) {
  event.preventDefault();

  const form = document.getElementById('formularioObras');
  const formData = new FormData(form);
  const data = new URLSearchParams();

  for (const pair of formData.entries()) {
    data.append(pair[0], pair[1]);
  }

  fetch("https://script.google.com/macros/s/AKfycbzzhTMICA9npjETlxPhW3gictH7UDGYZPOxFZrFMlHcu4_4sQjBa25USUT68w9qP6es8A/exec", {
    method: "POST",
    body: data,
  })
    .then(response => response.text())
    .then(result => {
      alert("¡Formulario enviado con éxito!");
      form.reset();
    })
    .catch(error => {
      console.error("Error al enviar formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    });
}
