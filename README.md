SPRINT 3 - TP 2 -- VALIDACIONES (Actualización del SPRINT 3 - TP 1)

Validaciones implementadas

Se implementaron dos niveles de validación:

1) express-validator (entrada)
Validación de body en POST, PUT, PATCH
Validación de params en GET y DELETE
Sanitización (trim)
Validación de tipos y longitudes

2) Mongoose (modelo)
Campos requeridos (required)
Longitudes mínimas y máximas
Validaciones personalizadas (arrays)

Se continúa aplicando al proyecto las buenas prácticas
* Arquitectura MVC
* Separación de responsabilidades
* Validaciones en múltiples capas
* Manejo de errores
* Código limpio y reutilizable