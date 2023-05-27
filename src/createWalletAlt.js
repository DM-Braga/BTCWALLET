/* // Importando a biblioteca bitcoinjs-lib
const bitcoin = require('bitcoinjs-lib');

// Gerando uma nova chave privada para a carteira
const keyPair = bitcoin.ECPair.makeRandom({ network: bitcoin.networks.testnet });

// Obtendo o endereço da carteira a partir da chave pública
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet });

// Exibindo a chave privada, chave pública e endereço da carteira gerada
console.log('Carteira Gerada!')
console.log('Chave Privada (WIF):', keyPair.toWIF());
console.log('Chave Pública (hex):', keyPair.publicKey.toString('hex'));
console.log('Endereço da Carteira:', address); */

/*--------------------------------------------------------------*/

/* // Importando as bibliotecas bitcoinjs-lib e bitcoinjs-lib-zcash
const bitcoin = require('bitcoinjs-lib');
const bitcoinZcash = require('bitcoinjs-lib-zcash');

// Gerando uma nova chave privada para a carteira
const rng = () => bitcoinZcash.randomBytes(32); // Função para gerar bytes aleatórios
const keyPair = bitcoin.ECPair.makeRandom({ rng, network: bitcoin.networks.testnet });

// Obtendo o endereço da carteira a partir da chave pública
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet });

// Exibindo a chave privada, chave pública e endereço da carteira gerada
console.log('Carteira Gerada!')
console.log('Chave Privada (WIF):', keyPair.toWIF());
console.log('Chave Pública (hex):', keyPair.publicKey.toString('hex'));
console.log('Endereço da Carteira:', address); */


/* ----------------------------------------------------------- */


/* // Importando a biblioteca bitcoinjs-lib
const bitcoin = require('bitcoinjs-lib');

// Importando a biblioteca crypto
const crypto = require('crypto');

// Função para gerar uma chave privada aleatória
function generateRandomPrivateKey() {
  const privateKey = crypto.randomBytes(32);
  return privateKey;
}

// Gerando uma nova chave privada para a carteira
const privateKey = generateRandomPrivateKey();
const keyPair = bitcoin.ECPair.fromPrivateKey(privateKey, { network: bitcoin.networks.testnet });

// Obtendo o endereço da carteira a partir da chave pública
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet });

// Exibindo a chave privada, chave pública e endereço da carteira gerada
console.log('Carteira Gerada!')
console.log('Chave Privada (WIF):', keyPair.toWIF());
console.log('Chave Pública (hex):', keyPair.publicKey.toString('hex'));
console.log('Endereço da Carteira:', address); */


/* ----------------------------------------------------------- */

// Funcional, porem teve que adicionar a versão 5.0.0 da bitcoinjs-lib

// Importando a biblioteca bitcoinjs-lib
const bitcoin = require('bitcoinjs-lib');

// Gerando uma nova chave privada para a carteira
const keyPair = bitcoin.ECPair.makeRandom({ network: bitcoin.networks.testnet });

// Obtendo o endereço da carteira a partir da chave pública
const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet });

// Exibindo a chave privada (WIF), chave pública (hex) e endereço da carteira gerada
console.log('Carteira Gerada!')
console.log('Chave Privada (WIF):', keyPair.toWIF());
console.log('Chave Pública (hex):', keyPair.publicKey.toString('hex'));
console.log('Endereço da Carteira:', address);

