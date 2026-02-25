const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Función genérica para realizar peticiones HTTP
 */
async function apiCall(endpoint, options = {}) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        // Aquí puedes añadir headers de autorización si los tienes
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

        // Convertir la respuesta a JSON
        const data = await response.json();

        if (!response.ok) {
            // Manejar errores HTTP (ej: 404, 500)
            throw new Error(data.message || 'Error en la petición a la base de datos');
        }

        return data;
    } catch (error) {
        console.error(`Error en API Call a ${endpoint}:`, error);
        throw error;
    }
}

// ==========================================
// Ejemplos de Servicios (CRUD)
// ==========================================

export const DataBaseServices = {
    // GET: Obtener todos los registros
    getAll: async () => {
        return await apiCall('/recurso'); // Reemplaza '/recurso' por tu endpoint real
    },

    // GET: Obtener un registro por ID
    getById: async (id) => {
        return await apiCall(`/recurso/${id}`);
    },

    // POST: Crear un nuevo registro
    create: async (data) => {
        return await apiCall('/recurso', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    // PUT: Actualizar un registro existente
    update: async (id, data) => {
        return await apiCall(`/recurso/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },

    // DELETE: Eliminar un registro
    remove: async (id) => {
        return await apiCall(`/recurso/${id}`, {
            method: 'DELETE',
        });
    },

    // LOGIN: Servicio de ejemplo para el LoginFormScreen
    login: async (credentials) => {
        return await apiCall('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
    }
};

export default DataBaseServices;
