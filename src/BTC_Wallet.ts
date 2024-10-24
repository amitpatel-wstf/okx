import { NewAddressParams } from "@okxweb3/coin-base";
import { BtcWallet } from "@okxweb3/coin-bitcoin";
import { generateMnemonic } from "@okxweb3/crypto-lib/dist/bip39";

export async function getBTCWallet() {
  let wallet = new BtcWallet();

  // get mnemonic
  let mnemonic = await generateMnemonic(128);

  console.log("mnemonic:", mnemonic);
  let param = {
    mnemonic: mnemonic,
    hdPath: "m/44'/0'/0'/0/0",
  };
  console.log("param:", param);
  // set mnemonic
  // get derived key
  let privateKey = await wallet.getDerivedPrivateKey(param);
  console.log("privateKey:", privateKey);
  // get new address
  // import { BtcWallet } from "@okxweb3/coin-bitcoin";

  // let wallet = new BtcWallet()

  // legacy address
  let params: NewAddressParams = {
    privateKey: "L22jGDH5pKE4WHb2m9r2MdiWTtGarDhTYRqMrntsjD5uCq5z9ahY",
  };
  let address = await wallet.getNewAddress(params);

  console.log("legacy address:", address);
}
