/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.28",
  networks:{
    loclhost:{
      url:"http://127.0.0.1:8545",
    },
  },
};
