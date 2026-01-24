// assets/js/clientes.js
// Ejemplo de uso de Supabase para SELECT e INSERT en clientes
import { supabase } from './supabaseClient.js';

// Obtener clientes
export async function obtenerClientes() {
	try {
		const { data, error } = await supabase
			.from('clientes')
			.select('*');
		if (error) throw error;
		console.log('Clientes obtenidos:', data);
		return data;
	} catch (err) {
		console.error('Error al obtener clientes:', err.message);
		return null;
	}
}

// Insertar cliente
export async function insertarCliente(cliente) {
	try {
		const { data, error } = await supabase
			.from('clientes')
			.insert([cliente])
			.select();
		if (error) throw error;
		console.log('Cliente insertado:', data);
		return data;
	} catch (err) {
		console.error('Error al insertar cliente:', err.message);
		return null;
	}
}
// JS para vista de clientes
// Aquí irá la lógica de interacción con Supabase y manejo de la UI