const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login",
});

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.post('/signup', (req, resp) => {
    const sql = "INSERT INTO datos(`Username`, `Email`, `Password`) VALUES (?)";
    const values = [
        req.body.username, // Asegúrate de que este nombre coincida
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return resp.json("Error"); // Aquí usa 'resp'
        }
        return resp.json("Success"); // Siempre retornar "Success" si no hay errores
    });
});

app.post('/login', (req, resp) => {
    const sql = "SELECT * FROM datos WHERE `Email` = ? AND `Password` = ?"; // Cambia 'login' a 'datos'
    const values = [
        req.body.email,  // Asegúrate de que este nombre coincida con el de la columna en la base de datos
        req.body.password // Asegúrate de que este nombre coincida con el de la columna en la base de datos
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            return resp.json("Error"); // Aquí usa 'resp'
        }
        if (data.length > 0) {
            return resp.json("Success"); // Retorna "Success" si encuentra el usuario
        } else {
            return resp.json("No record found"); // Mensaje claro si no hay coincidencias
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
