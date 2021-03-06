//Comandos para compilar o smart contract e fazer a conexão com do web3.js, integrando o smart contract a aplicação js.
//Compilar no terminal ou atribuir ao script .js da aplicação

const fs = require("fs"),
      abiDecoder = require('abi-decoder'),
      Web3 = require('web3'),
      solc = require('solc');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const code = fs.readFileSync('hello.sol').toString();
const compiledCode = solc.compile(code);

const abi = JSON.parse(compiledCode.contracts[':Hello'].interface);
const abiInterface = compiledCode.contracts[':Hello'].interface;

//const HelloContract = web3.eth.contract(abiInterface);
const HelloContract = web3.eth.contract(abi)
const bytecode = compiledCode.contracts[':Hello'].bytecode;


const deployedContract = HelloContract.new('World',{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
const address = deployedContract.address
const contractInstance = HelloContract.at(deployedContract.address)
