//servidor express configurado para escuchar en el puerto 3005 y manejar solicitudes a las diversas rutas

import express from 'express';

import {obtenerSuperheroePorIdController,buscarSuperheroesPorAtributoController,obtenerSuperheroeMayoresDe30Controller } from './controllers/superheroesController.mjs';

const app= express();
const PORT=3005;

//rutas

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30',obtenerSuperheroeMayoresDe30Controller);


//levantar el servidor en el puerto3005
app.listen(PORT, ()=> {
    console.log(`Servidor escuchando http://localhost:${PORT}/superheroes`)
})
//ruta get con parametros de ruta
//solicitus http://localhost:3000/user/123

/*

http://localhost:3005/superheroes/id/2

http://localhost:3005/superheroes/atributo/planetaOrigen/Tierra

http://localhost:3005/superheroes/edad/mayorA30
*/