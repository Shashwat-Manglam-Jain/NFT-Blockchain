/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "sepolia",  // Use lowercase for network name
  networks: {
    hardhat: {},
    sepolia: {  // Add Sepolia network details
      url: API_URL,  // Your Sepolia Infura/Alchemy URL
      accounts: [`0x${PRIVATE_KEY}`],  // Your private key
    }
  },
};
