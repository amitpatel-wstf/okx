// export async function getMultiWallet(){
//     // Define your parameters
// const addresses = [
//     {
//         "chainIndex":"1",
//         "address":"0x561815e02bac6128bbbbc551005ddfd92a5c24db",
//         "publicKey":"02012db63bf0380294a6ecf87615fe869384b0510cb910a094254b6844af023ee2",
//         "signature":"62acda5e471d9bf0099add50f4845256868d980821c161095651a918d3ef8a6b2286f512028172eabbe46ec2c9c2c20e5c40ff1fb23e1cdfdbed033ad924ce521b"
//     },
//     {
//         "chainIndex":"10",
//         "address":"0x561815e02bac6128bbbbc551005ddfd92a5c24db",
//         "publicKey":"02012db63bf0380294a6ecf87615fe869384b0510cb910a094254b6844af023ee2",
//         "signature":"62acda5e471d9bf0099add50f4845256868d980821c161095651a918d3ef8a6b2286f512028172eabbe46ec2c9c2c20e5c40ff1fb23e1cdfdbed033ad924ce521b"
//     }
// ];

// const getCreateAccountBody = {
//     addresses: addresses,
//     signMessage: '1717062864123', // UNIX Timestamp in millisecond
// };

// // Define auxiliary function
// const getCreateAccountData = async () => {
//     const apiRequestUrl = getRequestUrl(
//       apiBaseUrl,
//       '/api/v5/wallet/account/create-account'
//     );
//     return fetch(apiRequestUrl, {
//       method: 'post',
//       headers: headersParams,
//       body: JSON.stringify(getCreateAccountBody),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         return res;
//     });
// };

// const { data: createAccountData } = await getCreateAccountData();
// }