
import LockAbi from "./abis/Lock.json";
import PumpFunAbi from "./abis/PumpFun.json";
import TokenAbi from "./abis/Token.json";
import TokenFactoryAbi from "./abis/TokenFactory.json";

const getAbi = (mod) => (mod.abi ? mod.abi : mod.default?.abi);

export const CONTRACTS = {
  lock: {
  address: "0x48829CfA2c6D45335f481Be030aFeBD70E436266",
  abi: getAbi(LockAbi),
  },
  pumpFun: {
  address: "0x3fcd4249D773b4BaeB568193fA17e08b9975258c",
  abi: getAbi(PumpFunAbi),
  },
  token: {
  address: "0xe958E3B591248931C17B5893E0d382D4035253d4",
  abi: getAbi(TokenAbi),
  },
  tokenFactory: {
  address: "0xbD2C901f2cC97D91475Bdf8af7C3F8015862c2B9",
  abi: getAbi(TokenFactoryAbi),
  },
};
