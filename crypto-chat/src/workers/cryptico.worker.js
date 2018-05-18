import * as cryptico from 'cryptico';

let rsaKey = null;
const rsaSecret = Math.random().toString(36);
const rsaBitLength = 2048;
const workerFunctions = new Map([
  ['generate-keys', generateKeyPair],
  ['encrypt', encrypt],
  ['decrypt', decrypt]
]);

onmessage = function (message) {
  const [messageType, text, key] = message.data;
  postMessage(workerFunctions.get(messageType)(text, key));
};

function generateKeyPair() {
  rsaKey = cryptico.generateRSAKey(rsaSecret, rsaBitLength);
  return cryptico.publicKeyString(rsaKey);
}

function encrypt(plainText, publicKey) {
  return cryptico.encrypt(plainText, publicKey).cipher;
}

function decrypt(encryptedText) {
  return cryptico.decrypt(encryptedText, rsaKey).plaintext;
}
