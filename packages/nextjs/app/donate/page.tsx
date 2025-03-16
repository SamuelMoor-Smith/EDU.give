"use client";

import React, { useState } from "react";
// Import your blockchain interaction functions here, e.g., ethers.js or web3.js
// import { stakeTokens, unstakeTokens } from "../blockchain/interactions";

const StakingPage: React.FC = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [isStaking, setIsStaking] = useState<boolean>(true);

  const handleStake = async () => {
    if (amount) {
      // Add your staking logic here
      console.log("Staking", amount);
      // Example: await stakeTokens(amount);
    }
  };

  const handleUnstake = async () => {
    if (amount) {
      // Add your unstaking logic here
      console.log("Unstaking", amount);
      // Example: await unstakeTokens(amount);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStaking) {
      handleStake();
    } else {
      handleUnstake();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isStaking ? "Stake Tokens" : "Unstake Tokens"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label" htmlFor="amount">
              <span className="label-text">Amount</span>
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="btn btn-primary w-full mr-2"
              onClick={() => setIsStaking(true)}
            >
              Stake
            </button>
            <button
              type="submit"
              className="btn btn-secondary w-full ml-2"
              onClick={() => setIsStaking(false)}
            >
              Unstake
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StakingPage;
