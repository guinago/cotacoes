// Criar um CLI usando Yargs
// Vai receber um parametro de entrada, que vai ser o código do ativo na bolsa de valores
// Se não receber o ativo retornar o erro
// se receber, deve consultar o ativo usando o request
// devolver o valor de abertura, valor de fechamento, maior alata do dia, menor baixa do dia
// mostrar valores de baixa vermelho utilizando o chalk
// mostrar valores de alta azul
// utilizar arrow function
// utilizar es6
// utilizar destruct

const chalk = require('chalk');
const yargs = require('yargs')
//const task = require('./task')
const cotacao = require('./util/cotacao')

yargs.version('1.0.1')
console.log(process.argv)
// Criando CLI - Utilizando YARGS 
yargs.command({
    command: 'consulta',
    describe: 'Consultar um ativo na bolsa de valores',
    builder:{
        ativo:{
            describe: 'Ativo na bolsa de valores',
            demandOption: true,
            type: 'string'
        }
    },
    // Utilizando Arrow Function "(argv) => " para chamar o ativo
    handler: (argv) => {
        cotacao(argv.ativo.toUpperCase(), (data) =>{
            console.log(chalk.green.bold(data.symbol))
            console.log(chalk.blue.bold(`Moeda do Ativo: ${data.currency}`))
            console.log(chalk.gray.bold(`Nome do Ativo: ${data.name}`))
            console.log(chalk.red.bold(`Menor valor do dia: ${data.day_low}`))
            console.log(chalk.red.bold(`Maior valor do dia: ${data.price}`))
        })
    }
})

yargs.parse()