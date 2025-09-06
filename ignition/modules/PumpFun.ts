import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const feeRecipient = "0xd8fF798eE19Ea20fb82D15723d0F5EcCc24e4142";
const feeAmt = "10000000000000000"; // 0.01 ether in wei
const basisFee = 100; // 1%

const PumpFunModule = buildModule("PumpFunModule", (m) => {
  const pumpFun = m.contract("PumpFun", [feeRecipient, feeAmt, basisFee]);
  return { pumpFun };
});

export default PumpFunModule;
