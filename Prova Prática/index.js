

// Questão 01 


const http = require('http');
const url = require('url');
const info = ('info')
const PORT = 5000

const objeto = [
    {id: 1, nome: 'Carlos'},
    {id: 2, nome: 'Bruno'},
    {id: 3, nome: 'Letícia'},
]

const json = JSON.stringify(objeto)
console.log(json)

const header = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end();
});


// Questão 04


const fs = require('fs')

const arquivoAntigo = 'arquivoAntigo.txt'
const arquivoNovo = 'arquivoNovo.txt'

fs.rename = (arquivoAntigo, arquivoNovo, 'utf8', (req) => {
    if(err) {
        console.log('Erro ao criar o arquivo!')
        return;
    }
    console.log('Arquivo criado com sucesso ')
});