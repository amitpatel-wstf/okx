import CryptoJS from "crypto-js";
export async function API_GET_CALL() {
  try {
    const timestamp = new Date().toISOString();

    const sign = CryptoJS.enc.Base64.stringify(
      CryptoJS.HmacSHA256(
        timestamp + "GET" + "/api/v5/waas/blockchain/get-all-chains",
        "3A4193E92078633B376FB4937899E4A2"
      )
    );

    const request = await fetch(
      "https://www.okx.com/api/v5/waas/blockchain/get-all-chains",
      {
        headers: {
          "OK-ACCESS-PROJECT": "eef86aba59d93b4a8a90480e49d5d63b",
          "OK-ACCESS-KEY": "07e956d1-664e-4fcb-b918-e980d9184729",
          "OK-ACCESS-TIMESTAMP": timestamp,
          "OK-ACCESS-SIGN": sign,
          "OK-ACCESS-PASSPHRASE": "Amit@1234",
        },
      }
    );
    console.log("response : ", request);
  } catch (error) {
    console.log("error : ", error);
  }
}
// API_GET_CALL();
