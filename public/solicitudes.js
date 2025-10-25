async function cargarSolicitudes() {
  try {
    const response = await fetch('/solicitudes');
    const solicitudes = await response.json();

    const tbody = document.querySelector('#tablaSolicitudes tbody');
    tbody.innerHTML = '';

    solicitudes.forEach(s => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${s.id}</td>
        <td>${s.nombre}</td>
        <td>${s.empleado_id}</td>
        <td>${s.fecha_solicitud}</td>
        <td>${s.fecha_actual_descanso}</td>
        <td>${s.fecha_solicitada_descanso}</td>
        <td>${s.motivo}</td>
      `;
      tbody.appendChild(fila);
    });
  } catch (err) {
    alert('Error al cargar las solicitudes');
  }
}

cargarSolicitudes();