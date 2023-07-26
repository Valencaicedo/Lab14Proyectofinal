const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000; 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'' ,
  database: 'clinica_db' });

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa!');
});


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/formulario_doctores', (req, res) => {
  res.sendFile(__dirname + '/public/formulario_doctores.html');
});


app.post('/guardar_doctor', (req, res) => {

});


app.get('/formulario_pacientes', (req, res) => {
  res.sendFile(__dirname + '/public/formulario_pacientes.html');
});


app.post('/guardar_paciente', (req, res) => {
});


app.get('/doctores', (req, res) => {
  const sql = 'SELECT * FROM doctores';

  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener el listado de doctores:', err);
      res.send('Error al obtener el listado de doctores.');
    } else {
      res.render('lista_doctores', { doctores: result });
    }
  });
});


app.get('/pacientes', (req, res) => {
  const sql = 'SELECT * FROM pacientes';

  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener el listado de pacientes:', err);
      res.send('Error al obtener el listado de pacientes.');
    } else {
      res.render('lista_pacientes', { pacientes: result });
    }
  });
});


app.get('/citas', (req, res) => {
  const sql = 'SELECT * FROM citas';

  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener el listado de citas:', err);
      res.send('Error al obtener el listado de citas.');
    } else {
      res.render('lista_citas', { citas: result });
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor Express iniciado en http://localhost:${port}`);
});

app.set('view engine', 'ejs');