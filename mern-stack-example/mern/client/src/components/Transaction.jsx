import React, { useState, useEffect } from "react";

export default function Transaction() {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await fetch("http://localhost:5050/agent");
        if (!response.ok) {
          throw new Error("Failed to fetch agents");
        }
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    }

    async function fetchTransactions() {
      try {
        const response = await fetch("http://localhost:5050/transaction-data");
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    fetchAgents();
    fetchTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, agent_id: selectedAgent }),
      });
      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }
      // Refresh transactions after adding a new one
      fetchTransactions();
      setAmount("");
      setSelectedAgent("");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Transaction Page</h1>

      {/* List component for displaying transactions */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-2">
          List of Transactions (Last 10)
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">
                Agent Full Name
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {transaction.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {transaction.amount}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {transaction.agentFullName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form component for entering transaction amount */}
      <div>
        <h2 className="text-lg font-medium mb-2">Enter Transaction Amount</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount" className="block mb-2">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <h2 className="text-lg font-medium mb-2 mt-4">Select Agent</h2>
          <select
            id="agents"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
          >
            <option value="" disabled hidden>
              Select an agent
            </option>
            {agents.map((agent) => (
              <option key={agent._id} value={agent._id}>
                {agent.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-4"
            disabled={!amount || !selectedAgent}
          />
        </form>
      </div>
    </div>
  );
}


