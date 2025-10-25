const form = document.getElementById('solicitudForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/solicitudes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Solicitud enviada correctamente');
      form.reset();
    } else {
      const error = await response.json();
      alert('Error: ' + error.error);
    }
  } catch (err) {
    alert('Error de conexión con el servidor');
  }
});