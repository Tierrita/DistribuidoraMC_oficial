// ===============================
// Controlador para la entidad Clientes
// ===============================

const supabase = require('../supabaseClient');

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
	try {
		// Seleccionamos los campos según la estructura de la BD
		const { data, error } = await supabase
			.from('clientes')
			.select('id_cliente, direccion, nombre_cliente, telefono, descripcion');
		if (error) throw error;
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener los clientes', detalle: err.message });
	}
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
	try {
		const { direccion, nombre_cliente, telefono, descripcion } = req.body;
		// Validación: nombre_cliente es obligatorio
		if (!nombre_cliente || typeof nombre_cliente !== 'string' || !nombre_cliente.trim()) {
			return res.status(400).json({ error: 'El campo "nombre_cliente" es obligatorio y debe ser un string no vacío.' });
		}
		// Insertar en Supabase
		const { data, error } = await supabase
			.from('clientes')
			.insert([{ direccion, nombre_cliente, telefono, descripcion }])
			.select();
		if (error) throw error;
		res.status(201).json(data[0]);
	} catch (err) {
		res.status(500).json({ error: 'Error al crear el cliente', detalle: err.message });
	}
};