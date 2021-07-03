const app = require("../app")
const movies = require("../models/filmes.json")//importando meu arquivo json dos filmes 

const home =(request,response)=>{
    response.status(200).send(
        {
            "message": "Hi! Welcome to {reprograma}flix!!!"
        }
    )
}

const getAll = (request, response) =>{
    response.status(200).send(movies);
}
const getById = (request, response) =>{
    //id solicitado na requisiçao
    const idRequerido = request.params.id;
    //find((elemento)=> elemento + a lógica)
    const idFiltrado =movies.find(movie=>movie.id==idRequerido)
    response.status(200).send(idFiltrado)
}
const getByTitle =(request,response)=>{
    //acessando título na request
    const requestedTitle = request.query.title.toLowerCase()
    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle))
    console.log(filteredTitle)
    //adicionar uma condição para retornar o título
    if (filteredTitle ===""|| filteredTitle===undefined){
        response.status(404).send({
            "message": "Por favor, insira um título válido."
        })
    } else{
        response.status(200).send(filteredTitle)
    }
    //enviar uma resposta para minha requisição
    response.status(200).send()
}
module.exports = {
     home,
     getAll,
     getById,
     getByTitle
    }
     //responsabilidade do controllers lidar com nossos dados neste caso filmes
