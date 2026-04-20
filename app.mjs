// Se importa este framework para crear el servidor web, definir los endpoints, manejar requests y responses, usar middlewares
import express from 'express';

// Se importa el modulo path para el manejo de rutas de archivos
import path from 'path';

// Se importa este módulo para convertir URL a ruta
import { fileURLToPath } from 'url';

// Se importa la conexión a la DB
import { connectDB } from './config/dbConfig.mjs';

// Se importan los endpoints relacionados a los superhéroes
import SuperHeroRoutes from './routes/SuperHeroRoutes.mjs';

// Aquí se crea el servidor listo para configurarse
const app = express();

// Aquí se simula __dirname en ES Modules (.mjs)
const __filename = fileURLToPath(import.meta.url); // Convierte URL a la ruta real
const __dirname = path.dirname(__filename); // Obtine la ruta de la carpeta

// Aquí se define en qué puerto corre el servidor
const PORT = process.env.PORT || 3000;


// Aquí se configura el motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para convertir las requests a JSON
app.use (express.json());

// Configuración de rutas (todas las rutas bajo el prefijo /api)
app.use ('/api', SuperHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use ((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Conexión a MongoDB + Levantar el servidor
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en puerto ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error conectando a la DB:", error);
    });

app.get("/test", (req, res) => {
    res.render("dashboard");
});


/*****
Este archivo es el punto de entrada. Configura el servidor Express, middlewares, conexión a base de datos y registra las rutas de la API.
*****/