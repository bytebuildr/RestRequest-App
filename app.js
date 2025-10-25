const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const solicitudesRouter = require('./routes/solicitudes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/solicitudes', solicitudesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});