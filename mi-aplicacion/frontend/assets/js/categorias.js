// assets/js/categorias.js
// Ejemplo de uso de Supabase para SELECT e INSERT
import { supabase } from './supabaseClient.js';

// Obtener registros de la tabla 'categorias'
export async function obtenerCategorias() {
	try {
		const { data, error } = await supabase
			.from('categorias')
			.select('*');
		if (error) throw error;
		console.log('Categorías obtenidas:', data);
		return data;
	} catch (err) {
		console.error('Error al obtener categorías:', err.message);
		return null;
	}
}

// Insertar un nuevo registro en la tabla 'categorias'
export async function insertarCategoria(nombre) {
	try {
		const { data, error } = await supabase
			.from('categorias')
			.insert([{ nombre }])
			.select();
		if (error) throw error;
		console.log('Categoría insertada:', data);
		return data;
	} catch (err) {
		console.error('Error al insertar categoría:', err.message);
		return null;
	}
}

// Ejemplo de uso inmediato (puedes borrar o adaptar esto):
// obtenerCategorias();
// insertarCategoria('Nueva categoría de ejemplo');
// JS para vista de categorías
// Aquí irá la lógica de interacción con Supabase y manejo de la UI

// Lógica de categorías (placeholder)