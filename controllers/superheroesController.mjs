//maneja las solicitues http y utiliza la capa de servicio para obtener los datos necesarios

import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo,obtenerSuperheroeMayoresDe30 } from "../services/superheroesService.mjs";
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs'

export function obtenerSuperheroePorIdController(req, res){
    const {id}= req.params;
    const superheroe= obtenerSuperheroePorId(parseInt(id));

    if (superheroe){
        res.send(renderizarSuperheroe(superheroe));
    } else{
        res.status(404).send({mensaje: 'superheroe no encontrado'});
    }
}

export function buscarSuperheroesPorAtributoController(req,res){
    const {atributo, valor}=req.params;
    const superheroes= buscarSuperheroesPorAtributo(atributo, valor);
    
    if (superheroes.length >0){
        res.send(renderizarListaSuperheroes(superheroes));
    } else{
        res.status(404).send({mensaje: 'no se encontraron superheroes con ese atributo'});
    }
}


export function obtenerSuperheroeMayoresDe30Controller(req,res){
    const superheroe=obtenerSuperheroeMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroe));

}