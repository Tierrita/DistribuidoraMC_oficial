// ===============================
// Controlador para la entidad Categorias
// ===============================

const supabase = require('../supabaseClient');

// Obtener todas las categorías
exports.getCategorias = async (req, res) => {
	try {
		// Seleccionamos id_categoria y descripcion según la estructura de la BD
		const { data, error } = await supabase.from('categorias').select('id_categoria, descripcion');
		if (error) throw error;
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener las categorías', detalle: err.message });
	}
};

// Crear una nueva categoría
exports.createCategoria = async (req, res) => {
	try {
		const { descripcion } = req.body;
		// Validación: descripcion es obligatoria
		if (!descripcion || typeof descripcion !== 'string' || !descripcion.trim()) {
			return res.status(400).json({ error: 'El campo "descripcion" es obligatorio y debe ser un string no vacío.' });
		}
		// Insertar en Supabase
		const { data, error } = await supabase.from('categorias').insert([{ descripcion }]).select();
		if (error) throw error;
		res.status(201).json(data[0]);
	} catch (err) {
		res.status(500).json({ error: 'Error al crear la categoría', detalle: err.message });
	}
};