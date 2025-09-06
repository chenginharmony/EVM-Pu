import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const tokenName = "MyToken";
const tokenSymbol = "MTK";
const initialSupply = "1000000000000000000000000"; // 1 million tokens with 18 decimals

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Token", [tokenName, tokenSymbol, initialSupply]);
  return { token };
});

export default TokenModule;
