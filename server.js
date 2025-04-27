const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Conexión a MySQL
const db = mysql.createConnection({
    host: 'mysqlserver37289.mysql.database.azure.com',
    user: 'azureadmin',
    password: '1043435988Vv', // tu contraseña
    database: 'pandoradatabase' // tu base de datos
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL:', err.message);
        // No tronar el servidor, solo loguear
    } else {
        console.log('Conectado a MySQL');
    }
});

// Ruta para obtener productos
app.get('/productos', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Arrancar servidor
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en http://localhost:' + (process.env.PORT || 3000));
});
