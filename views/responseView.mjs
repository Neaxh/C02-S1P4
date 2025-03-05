//responsable de formatear los datos en un formato adecuado JSON

export function renderizarSuperheroe(superheroe){
    return JSON.stringify(superheroe, null, 2);
}

export function renderizarListaSuperheroes(superheroes){
    return JSON.stringify(superheroes,null,2);
}