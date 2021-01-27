require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture story rice sad sniff hunt produce army gasp'; 
let testAccounts = [
"0x378b19415fb44cf5a28972db5d4d8391e25394a8cd4d1d2fc237830005be08bf",
"0x1ac4a7f3205b70d9652ac7e1292298c3828aea894806957682d266fb677a5fa6",
"0x6041f026309570091fd60170347c6046506f1b2da4a88ae715b670aa379cad6e",
"0x5e15283abb3fddf15d6c5604ed72a73d2e4a16b0550ef9546d546d8bab5df51d",
"0x11f795c6e8604e11d6daefd80425cf0e0c8ed7e53227a43df8fdffa8a07edb9c",
"0x985788a6c78a431557e303d09d21dbbde809cab6ed9ddfe52cf1b57a2f8132ff",
"0x6cdb1c0fb94f59428a9c17c70508cb43645a24b26092d10b070779e2589ef4cf",
"0x080caf8bba293001dcb127fae5daebd454ebb34d45e155c62bfa3bdb45d9474a",
"0x5d6ec05938575e200705792a46daf88a9e53881ddb3e48a2d5ffa136756853fa",
"0x5badf046cbebac507687fb701b1debeb79d8f8046f49a3ba07c0836cd9801eb1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
