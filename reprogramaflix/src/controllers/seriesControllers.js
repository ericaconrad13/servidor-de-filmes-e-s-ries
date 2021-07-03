const app = require("../app")
const series = require("../models/series.json")// importando meus arquivos json de series

const home = (request, reponse)=>{
    response.status(200).send(
        {
            "message": " Hello! Welcome to {reprograma}flix!!!"
        }
    )
}
const getAll = (request, response)=>{
    response.status(200).send(series)
}
const getById = (request, response) =>{
    const idRequerido = request.params.id
    const idFiltrado = series.find(series=>series.id==idRequerido)
    request.status(200).send(idFiltrado)
}
const getByTitle = (request, response)=>{
    const requestedTitle = request.query.title.toLowerCase ()
    const filteredTitle = series.find(series => serie.title.toLowerCase().includes(requestedTitle))
    console.log(filteredTitle)
    if(filteredTitle===""||filteredTitle=== undefined){
        response.status(404).send({
            "message": "Por favor, insira um título válido"
        })
    }else{
        response.status(200).send(filteredTitle)
    }
    response.status(200).send()
}
module.exports= {
    home,
    getAll,
    getById,
    getByTitle
}
