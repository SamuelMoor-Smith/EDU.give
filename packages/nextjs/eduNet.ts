import { defineChain } from "viem";

export const edunetwork = defineChain({
  id: 656476,
  name: "EDU Testnet",
  nativeCurrency: { decimals: 18, name: "EDU", symbol: "EDU" },
  rpcUrls: {
    default: {
      http: ["https://rpc.open-campus-codex.gelato.digital"],
      //   webSocket: ['wss://dodochain-testnet.alt.technology/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: "EDU Testnet (Sepolia) Explorer",
      url: "https://opencampus-codex.blockscout.com",
    },
  },
  testnet: true,
});
