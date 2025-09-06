import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACTS } from "./contracts.js";

function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [tokenName, setTokenName] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function connectWallet() {
    if (!(window as any).ethereum) {
      setError("MetaMask not detected");
      return;
    }
    try {
      const [selected] = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      setAccount(selected);
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function fetchTokenName() {
    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const contract = new ethers.Contract(CONTRACTS.token.address, CONTRACTS.token.abi, await provider);
      const name = await contract.name();
      setTokenName(name);
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>EVM PumpFun Frontend</h1>
      <button onClick={connectWallet} style={{ marginBottom: 16 }}>
        {account ? `Connected: ${account.substring(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
      </button>
      <div>
        <button onClick={fetchTokenName} disabled={!account}>
          Read Token Name
        </button>
        {tokenName && <div>Token Name: {tokenName}</div>}
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default App
