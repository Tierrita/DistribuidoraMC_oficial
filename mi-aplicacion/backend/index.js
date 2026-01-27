
// ===============================
// Punto de entrada del backend
// ===============================

// Importamos las dependencias principales
const express = require('express'); // Framework para crear el servidor HTTP
const cors = require('cors'); // Middleware para habilitar CORS (acceso entre dominios)
require('dotenv').config(); // Para manejar variables de entorno

// Importamos el cliente de Supabase
const { createClient } = require('@supabase/supabase-js');

// Inicializamos la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3001; // Puerto donde correrá el backend

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Configuración de Supabase usando variables de entorno
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Ruta de prueba para verificar conexión
app.get('/api/ping', (req, res) => {
	res.json({ message: 'Servidor backend funcionando y conectado a Supabase.' });
});

// Ejemplo de endpoint que consulta una tabla de Supabase
app.get('/api/productos', async (req, res) => {
	try {
		// Consultamos la tabla "productos" en Supabase
		const { data, error } = await supabase.from('productos').select('*');
		if (error) throw error;
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Iniciamos el servidor
app.listen(PORT, () => {
	console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});