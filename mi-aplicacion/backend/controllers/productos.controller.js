// ===============================
// Controlador para la entidad Productos
// ===============================

const supabase = require('../supabaseClient');

// Obtener todos los productos
exports.getProductos = async (req, res) => {
	try {
		// Seleccionamos los campos según la estructura de la BD
		const { data, error } = await supabase
			.from('productos')
			.select('id_producto, nombre_producto, descripcion, categoria, fecha_creacion, stock');
		if (error) throw error;
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener los productos', detalle: err.message });
	}
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
	try {
		const { nombre_producto, descripcion, categoria, fecha_creacion, stock } = req.body;
		// Validación: nombre_producto es obligatorio
		if (!nombre_producto || typeof nombre_producto !== 'string' || !nombre_producto.trim()) {
			return res.status(400).json({ error: 'El campo "nombre_producto" es obligatorio y debe ser un string no vacío.' });
		}
		// Insertar en Supabase
		const { data, error } = await supabase
			.from('productos')
			.insert([{ nombre_producto, descripcion, categoria, fecha_creacion, stock }])
			.select();
		if (error) throw error;
		res.status(201).json(data[0]);
	} catch (err) {
		res.status(500).json({ error: 'Error al crear el producto', detalle: err.message });
	}
};