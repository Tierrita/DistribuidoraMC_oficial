// assets/js/ventas.js
// Ejemplo de uso de Supabase para SELECT e INSERT en ventas
import { supabase } from './supabaseClient.js';

// Obtener ventas
export async function obtenerVentas() {
	try {
		const { data, error } = await supabase
			.from('ventas')
			.select('*');
		if (error) throw error;
		console.log('Ventas obtenidas:', data);
		return data;
	} catch (err) {
		console.error('Error al obtener ventas:', err.message);
		return null;
	}
}

// Insertar venta
export async function insertarVenta(venta) {
	try {
		const { data, error } = await supabase
			.from('ventas')
			.insert([venta])
			.select();
		if (error) throw error;
		console.log('Venta insertada:', data);
		return data;
	} catch (err) {
		console.error('Error al insertar venta:', err.message);
		return null;
	}
}
// Lógica de ventas (placeholder)