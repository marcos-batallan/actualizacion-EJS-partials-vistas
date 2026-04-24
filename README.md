SPRINT 3 - TP 3 -- VISTA EJS (Actualización del SPRINT 3 - TP 2)

Superhéroes App — CRUD con Node.js, Express y EJS

Aplicación web completa para la gestión de superhéroes, desarrollada con Node.js, Express, MongoDB y EJS.
Permite crear, visualizar, editar y eliminar superhéroes mediante una interfaz amigable y también a través de una API REST.

🚀 Funcionalidades

🔹 CRUD completo
➕ Crear superhéroes
📋 Listar todos los superhéroes
✏️ Editar superhéroes existentes
❌ Eliminar superhéroes

🔹 Vistas dinámicas con EJS
Dashboard interactivo
Formularios de alta y edición
Mensajes de éxito y validación
Interfaz simple y consistente

🔹 API REST
Endpoints para operaciones CRUD en formato JSON
Compatible con herramientas como Postman

🔹 Validaciones
Validación de datos en backend con express-validator
Manejo de errores en vistas (EJS)
Normalización de datos (arrays, strings, etc.)

🔹 UX mejorada
Mensajes visuales de confirmación
Redirecciones automáticas
Formularios que conservan datos en caso de error

🛠️ Tecnologías utilizadas
Node.js
Express
MongoDB + Mongoose
EJS (Embedded JavaScript Templates)
express-validator
method-override

📁 Estructura del proyecto
📦 proyecto
├── 📂 config
├── 📂 controllers
├── 📂 middlewares
├── 📂 routes
├── 📂 services
├── 📂 validators
├── 📂 views
│   ├── dashboard.ejs
│   ├── addSuperhero.ejs
│   ├── editSuperhero.ejs
│   ├── success.ejs
├── app.mjs
└── package.json


🌐 Rutas principales

🔵 Vistas (EJS)
/heroes → Dashboard
/heroes/agregar → Formulario de alta
/heroes/editar/:id → Formulario de edición

🟢 API (JSON)
GET /api/heroes
GET /api/heroes/:id
POST /api/heroes
PUT /api/heroes/:id
PATCH /api/heroes/:id
DELETE /api/heroes/:id

👉 Dashboard con listado de superhéroes
👉 Formularios de alta y edición
👉 Mensajes visuales de éxito


🚧 Mejoras futuras

🔍 Búsqueda de superhéroes
🚫 Evitar duplicados en base de datos
