require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ztuSFIeLe44gHKlqdPwK8esDrFSEXOls",
      accounts: [`0x6d8c8329217feca66caeef2feba6210f701f64425bc0f6c56b0df55afc4b91d1`]
    }
  },
}