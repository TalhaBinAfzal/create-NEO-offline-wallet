var neoApi = require("@cityofzion/neon-js").wallet;

var key = neoApi.generatePrivateKey();
var wif = neoApi.getWIFFromPrivateKey(key); // privateKey
var ac = new neoApi.Account(key);
var address = ac._address;

console.log("address : " + address)
console.log("private key: " + wif)

// Now go to https://neotracker.io/ and paste the generated address in search
// regex for current address ^(A)[0-9a-zA-Z]{32,34}$