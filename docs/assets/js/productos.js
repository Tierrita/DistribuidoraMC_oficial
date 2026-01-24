// assets/js/productos.js
// Ejemplo de uso de Supabase para SELECT e INSERT en productos
import { supabase } from './supabaseClient.js';

// Obtener productos
export async function obtenerProductos() {
  try {
    const { data, error } = await supabase
      .from('productos')
      .select('*');
    if (error) throw error;
    console.log('Productos obtenidos:', data);
    return data;
  } catch (err) {
    console.error('Error al obtener productos:', err.message);
    return null;
  }
}

// Insertar producto
export async function insertarProducto(producto) {
  try {
    const { data, error } = await supabase
      .from('productos')
      .insert([producto])
      .select();
    if (error) throw error;
    console.log('Producto insertado:', data);
    return data;
  } catch (err) {
    console.error('Error al insertar producto:', err.message);
    return null;
  }
}
