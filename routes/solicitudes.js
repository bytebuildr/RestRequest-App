const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

// Crear solicitud
router.post('/', async (req, res) => {
  const {
    nombre,
    empleado_id,
    fecha_solicitud,
    fecha_actual_descanso,
    fecha_solicitada_descanso,
    motivo
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO solicitudes (
        nombre, empleado_id, fecha_solicitud,
        fecha_actual_descanso, fecha_solicitada_descanso, motivo
      ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        nombre,
        empleado_id,
        fecha_solicitud,
        fecha_actual_descanso,
        fecha_solicitada_descanso,
        motivo
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener todas las solicitudes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM solicitudes ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;