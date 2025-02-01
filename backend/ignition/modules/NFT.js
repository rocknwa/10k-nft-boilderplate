const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("NFTModule", (m) => {

  const nft = m.contract("LiskNFT", ["https://rocknwa.github.io/Digital-Gallery/generated_metadata/"]);

  return { nft };
});
