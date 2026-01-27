// ===============================
// Controlador para la entidad Ventas
// ===============================

const supabase = require('../supabaseClient');

// Obtener todas las ventas
exports.getVentas = async (req, res) => {
	try {
		// Seleccionamos los campos según la estructura de la BD
		const { data, error } = await supabase
			.from('ventas')
			.select('id_venta, fecha, cliente, direccion, descripcion');
		if (error) throw error;
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener las ventas', detalle: err.message });
	}
};

// Crear una nueva venta
exports.createVenta = async (req, res) => {
	try {
		const { fecha, cliente, direccion, descripcion, productos } = req.body;
		// Validación: cliente es obligatorio
		if (!cliente || typeof cliente !== 'string' || !cliente.trim()) {
			return res.status(400).json({ error: 'El campo "cliente" es obligatorio y debe ser un string no vacío.' });
		}
		// Insertar la venta en Supabase
		const { data, error } = await supabase
			.from('ventas')
			.insert([{ fecha, cliente, direccion, descripcion }])
			.select();
		if (error) throw error;
		const venta = data[0];

		// Si hay productos, insertarlos en la tabla intermedia ventas_productos
		if (Array.isArray(productos) && productos.length > 0) {
			const ventasProductos = productos.map(p => ({
				id_venta: venta.id_venta,
				id_producto: p.id_producto,
				cantidad: p.cantidad || 1
			}));
			const { error: errorVP } = await supabase.from('ventas_productos').insert(ventasProductos);
			if (errorVP) throw errorVP;
		}

		res.status(201).json(venta);
	} catch (err) {
		res.status(500).json({ error: 'Error al crear la venta', detalle: err.message });
	}
};