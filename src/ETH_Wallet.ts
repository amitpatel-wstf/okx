import { EthWallet } from "@okxweb3/coin-ethereum";
import { bip39 } from "@okxweb3/crypto-lib";

export async function getETHWallet() {
  // eth wallet
  let wallet = new EthWallet();
  console.log("eth wallet", wallet);
  // get mnemonic
  let mnemonic = bip39.generateMnemonic();
  console.log("generate mnemonic:", mnemonic);

  // get derived key
  const hdPath = await wallet.getDerivedPath({ index: 0 });
  let derivePrivateKey = await wallet.getDerivedPrivateKey({
    mnemonic: mnemonic,
    hdPath: hdPath,
  });
  console.log(
    "generate derived private key:",
    derivePrivateKey,
    ",derived path: ",
    hdPath
  );

  // get new address
  let newAddress = await wallet.getNewAddress({ privateKey: derivePrivateKey });
  console.log("generate new address:", newAddress);
}
