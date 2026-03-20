// Se importa este framework para crear el servidor web, definir los endpoints, manejar requests y responses, usar middlewares
import express from 'express';

// Se importa la conexión a la DB
import { connectDB } from './config/dbConfig.mjs';

// Se los importan los endpoints relacionados a los superhéroes
import SuperHeroRoutes from './routes/SuperHeroRoutes.mjs';

// Aquí se crea el servidor listo para configurarse
const app = express();

// Aquí se define en qué puerto corre el servidor
const PORT = process.env.PORT || 3000;

// Middleware para convertir las requests a JSON
app.use (express.json());

// Conexión a MongoDB
connectDB();

// Configuración de rutas (todas las rutas bajo el prefijo /api)
app.use ('/api', SuperHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use ((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen (PORT, () => {
    console.log (`Servidor escuchando en puerto ${PORT}`);
});


/*****
Este archivo es el punto de entrada. Configura el servidor Express, middlewares, conexión a base de datos y registra las rutas de la API.
*****/