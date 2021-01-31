require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strike dash right artwork include argue metal genre'; 
let testAccounts = [
"0x1a5de0a30449670ab7eeab4d878a98d86f16d3051c3da12f89d0b9d43939714c",
"0x146ec7f46bfd39a1552643ee6d0bd86e2139973dd8d135fe5e992c59bfd2d0f4",
"0x8663e79b4aef3d35f4fd410397d104b4ab52d1e417f2d77b5918f41ddc9bb229",
"0x54954fccad964ceefff92380a0bce2367affca915d558fc895a91077e5a3e61c",
"0x2143181750128ad9ec74bb8acef40ded944f934822d4683d8d4691b904dcf8eb",
"0xe05224535405e12b3f04545e0415b768f9bbf3e617e0865895d6970e570cce6b",
"0x311ff89b518f2ffc02a643bd1177b3fe8b61a982c11917354184255ef2c9edbe",
"0x48820c87951ed2bbc42138603dd1a90f528b62fdd551fc514f6197962d66dc9e",
"0x048ff1d1a2a0b03e122dc8970f90e4af37954cbd3bfc61312eec8f12287b7c3c",
"0xdfb0ba7229fb35145b3e5be21e6c11fb7df7f4840f05508eb3adf81c219466d1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
