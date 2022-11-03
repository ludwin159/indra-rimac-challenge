# indra-rimac-challenge
## Contenido
1. Información general
2. Tecnologías usadas
3. Instalación

### Información general
El aplicativo como objetivo principal tiene poder hacer la cotización de un seguro vehicular
este consta de 3 partes. La primera es para los datos del usuario, la segunda es para cotizar el seguro y la ultima es para validar el correo electrónico con el precio final.
¿Cómo dividí el proyecto para realizarlo?
- Primero: entender la lógica de negocio del proyecto y que es lo que espero contruir
- Segundo: realizé la arquitectura del proyecto con la metodología a usar
- Tercero: Empecé con la Maquetación con "mobile first"
- Cuarto: Trabaje en el Responsive design
- Quinto: implementación de lógica para el correcto funcionamiento
- Sexto: validación de campos y casuisticas ejemplo: Recarga de página sin perder datos.

### Tecnologías
* React con typescript
* Sass con la metodología BEM
#### librerías
-2 librerías
* React-router-dom "Para las rutas"
* Redux.js "Para poder manejar un estado global"

### Instalación
1. Clone el proyecto del repositorio "git clone <url git>"
2. Crear un archivo con el nombre ".env.local" en la raiz del proyecto y pegar la siguiente variable de entorno "REACT_APP_BASE_PATH_URL_JPH='https://jsonplaceholder.typicode.com"
3. Dentro del proyecto ejecutar el comando "npm instal" para instalar todas las dependencias del proyecto.
4. con el comando npm run start puede correr el proyecto
