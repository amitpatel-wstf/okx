// // import { getETHWallet } from "./ETH_Wallet";

import { API_GET_CALL } from "./API_Call";

// // getETHWallet();
// import axios from "axios";
// import crypto from "node:crypto";

// // Your API credentials
// const project = "ad8b49cf261cffae162ad8491e1cbd58";
// const apiKey = "629edabb-32bc-476e-8ccb-469151c9c1e7";
// const passphrase =
//   "0xb75cdeece5e8d295bf626cfb0eebb8500919e6be9160cd57738fbf69c15750d8";
// const timestamp = new Date().toISOString();
// const secret =
//   "84B814CE57B7F488963AE4B178C5023B"; // Replace with your actual secret

// // Create the signature
// const prehash = timestamp + "GET" + "/api/v5/dex/cross-chain/build-tx";
// const signature = crypto
//   .createHmac("sha256", secret)
//   .update(prehash)
//   .digest("base64");

// // Set the request options
// const options = {
//   method: "GET",
//   url: "https://www.okx.com/api/v5/dex/cross-chain/build-tx",
//   params: {
//     amount: 0.0001,
//     fromChainId: 59144,
//     toChainId: 1,
//     fromTokenAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//     toTokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
//     slippage: 0.07,
//     userWalletAddress: "0x68C0DC0B4F70CCc4AB7CBA507bBeF5A25B564354",
//     // feePercent: 1,
//     // referrerAddress: "0x3f6a3f57569358a512ccc0e513f171516b0fd42a",
//   },
//   headers: {
//     "OK-ACCESS-PROJECT": project,
//     "OK-ACCESS-KEY": apiKey,
//     "OK-ACCESS-SIGN": signature,
//     "OK-ACCESS-PASSPHRASE": passphrase,
//     "OK-ACCESS-TIMESTAMP": timestamp,
//   },
// };

// console.log("Options : ", options);

// // Make the API request
// axios
//   .request(options)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

API_GET_CALL()

// GET request example
const getRequestPath = "/api/v5/waas/blockchain/get-all-chains";
// const getParams = {
//   chainId: 1,
// //   amount: 1000000000000,
// //   toTokenAddress: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
// //   fromTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
// };
// sendGetRequest(getRequestPath, {});

// getETHWallet()