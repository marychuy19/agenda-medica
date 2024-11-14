import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Configuración para obtener el directorio actual en un entorno ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inicializar el servidor
const app = express();
app.set("port", 4000);

//configuracion
app.use(express.static(__dirname + "/public"));

// Servir archivos estáticos desde la carpeta "frontend"
app.use(express.static(path.join(__dirname, 'frontend')));

// Ruta para la página de inicio
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/pages/login.html'));
});

// Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get("port")}`);
});








