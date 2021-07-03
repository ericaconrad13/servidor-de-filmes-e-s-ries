
const app = require ("./src/app.js")

//definir uma porta para o nosso servidor
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})

//vai ter a unica responsabilidade de chamar o servidor