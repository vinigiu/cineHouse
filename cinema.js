let cinema = "CineHouse"
/*let catalogo2 = [
    {
        codigo: 01,
        titulo: "Batman",
        duracao: 03,
        atores: ["Robert","Colin Pharell","Moça Linda"],
        anoDeLancamento: 2022,
        emCartaz: true
    },
    {
        codigo: 02,
        titulo: "Interstellar",
        duracao: 04,
        atores: ["Matthew McConaughey","Anne Hatthaway","Matt Damon"],
        anoDeLancamento: 2014,
        emCartaz: false
    },
]
*/

let catalogo = require('./database/catalogo.json');

//console.log(JSON.stringify(catalogo2))  // Usei para criar uma String JSON do catalogo2 para colocar no arquivo catalogo.json da pasta database

        //FUNÇÃO PARA ADICIONAR FILME AO CATÁLOGO

function adicionarFilme (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz});
}

        // TESTE PARA VERIFICAR FUNCIONAMENTO DA FUNÇÃO DE ADIÇÃO DE FILME
// adicionarFilme(03, "Exterminador", 02, ["João", "Carlos", "Sarah Connor"], 1988, false);
// console.log(catalogo[2])





        //FUNÇÃO PARA BUSCA FILME NO CATÁLOGO COM CÓDIGO -> Usei uma arrow function, mas não entendi e deve ter uma forma mais simples de fazer
function buscarFilme (num){ 
    let filme = catalogo.find(filme => filme.codigo === num);
    console.log(filme.titulo);
}


function buscarFilme2 (num){
    if (catalogo[num-1].codigo == num) {
       console.log(catalogo[num-1].titulo)
   } else {
       console.log("Não existe este filme no catálogo")
   }
}

        // TESTE PARA VERIFICAR FUNCIONAMENTO DA FUNÇÃO DE BUSCA DE FILME
// buscarFilme2(01)





        //FUNÇÃO PARA ALTERAR STATUS FILME COM CÓDIGO
function alterarStatusEmCartaz (num){
    let filme = catalogo.find(filme => filme.codigo === num);
    if(filme.emCartaz) {
        filme.emCartaz = false
    } else {
        filme.emCartaz = true
    }
    return filme
}

function alterarStatusEmCartaz2 (num){
    if(catalogo[num-1].emCartaz) {
        catalogo[num-1].emCartaz=false
    } else {
        catalogo[num-1].emCartaz=true
    }
    return catalogo[num-1]
}

function alterarStatusEmCartaz3 (num) {
    catalogo[num-1].emCartaz? catalogo[num-1].emCartaz=false : catalogo[num-1].emCartaz=true;
    return catalogo[num-1]
}

        // TESTE PARA VERIFICAR FUNCIONAMENTO DA FUNÇÃO DE ALTERAÇÃO STATUS
// console.log(alterarStatusEmCartaz2(01))
// console.log(alterarStatusEmCartaz3(01))

        // FUNÇÃO PARA LISTAR TODOS OS FILMES DO CATALOGO

function listarTodosOsFilmes () {
    for(i = 0; i < catalogo.length; i++) {
        console.log(catalogo[i].titulo)
    }
}
//listarTodosOsFilmes ()

function listarTodosOsFilmes2() {
    let listaFilmes = catalogo.forEach(catalogo => console.log(catalogo.titulo))
}

console.log(listarTodosOsFilmes2())

        // FUNÇÃO PARA LISTAR FILMES EM CARTAZ
function listarFilmesEmCartaz () {
    for(i = 0; i < catalogo.length; i++) {
        if(catalogo[i].emCartaz) {
            console.log(catalogo[i].titulo)
        }
    }
}

// listarFilmesEmCartaz()


        // FUNÇÃO PARA LISTAR FILMES DE DURAÇÃO ACIMA DE 2 HORAS
function listarFilmesDeLongaDuracao () {
    let filmesLongaDuracao = catalogo.filter(catalogo => catalogo.duracao > 2);
    return filmesLongaDuracao
}

// console.log(listarFilmesDeLongaDuracao())
