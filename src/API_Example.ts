// const https = require("https");
import https from "https";
// const crypto = require('crypto');
import crypto from "node:crypto";
import querystring from "querystring";

// Define API credentials and project ids
const api_config = {
  api_key: "629edabb-32bc-476e-8ccb-469151c9c1e7",
  secret_key: "84B814CE57B7F488963AE4B178C5023B",
  passphrase: "Sushil@123",
  project: "ad8b49cf261cffae162ad8491e1cbd58", // This applies only to onchainOS APIs
};

function preHash(timestamp: any, method: any, request_path: any, params: any) {
  // Create a pre-signature based on strings and parameters
  let query_string = "";
  if (method === "GET" && params) {
    query_string = "?" + querystring.stringify(params);
  }
  if (method === "POST" && params) {
    query_string = JSON.stringify(params);
  }
  return timestamp + method + request_path + query_string;
}

function sign(message: any, secret_key: any) {
  // Use HMAC-SHA256 to sign the pre-signed string
  const hmac = crypto.createHmac("sha256", secret_key);
  hmac.update(message);
  return hmac.digest("base64");
}

function createSignature(method: any, request_path: any, params: any) {
  // Get the timestamp in ISO 8601 format
  const timestamp = new Date().toISOString().slice(0, -5) + "Z";
  // Generate a signature
  const message = preHash(timestamp, method, request_path, params);
  const signature = sign(message, api_config["secret_key"]);
  return { signature, timestamp };
}

export function sendGetRequest(request_path: any, params: any) {
  // Generate a signature
  const { signature, timestamp } = createSignature("GET", request_path, params);

  // Generate the request header
  const headers = {
    "OK-ACCESS-KEY": api_config["api_key"],
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": api_config["passphrase"],
    "OK-ACCESS-PROJECT": api_config["project"], // This applies only to WaaS APIs
  };

  const options = {
    hostname: "www.okx.com",
    path: request_path + (params ? `?${querystring.stringify(params)}` : ""),
    method: "GET",
    headers: headers,
  };

  const req = https.request(options, (res: any) => {
    let data = "";
    res.on("data", (chunk: any) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log(data);
    });
  });

  req.end();
}

// POST request example
const postRequestPath = "/api/v5/mktplace/nft/ordinals/listings";
const postParams = {
  slug: "sats",
};
// sendPostRequest(postRequestPath, postParams);
