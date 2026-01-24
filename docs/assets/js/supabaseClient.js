// assets/js/supabaseClient.js
// Configuración central de Supabase para el frontend
// Usa @supabase/supabase-js v2
// No incluyas credenciales reales en este archivo

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm';

// Variables de entorno (placeholders, reemplaza por tus valores reales en producción)
const SUPABASE_URL = 'https://TU_PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_PUBLIC_KEY';

// Instancia única del cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Puedes importar 'supabase' desde este archivo en otros módulos JS
