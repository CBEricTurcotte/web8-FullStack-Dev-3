import React from "react";

export default function Transaction() {
  // Mock data for transactions
  const transactions = [
    { id: 1, date: "2024-03-25", amount: 100, agentFullName: "John Doe" },
    { id: 2, date: "2024-03-26", amount: 150, agentFullName: "Jane Smith" },
    // Add more transactions as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Transaction Page</h1>

      {/* Dropdown for selecting agents */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-2">Select Agent</h2>
        <select
          id="agents"
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          defaultValue=""
          disabled // Mocking as non-functional for now
        >
          <option value="" disabled hidden>
            Select an agent
          </option>
          <option value="agent1">Agent 1</option>
          <option value="agent2">Agent 2</option>
          {/* Add more options as needed */}
        </select>
      </div>

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
              <th className="border border-gray-300 px-4 py-2">Agent Full Name</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.amount}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.agentFullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form component for entering transaction amount */}
      <div>
        <h2 className="text-lg font-medium mb-2">Enter Transaction Amount</h2>
        <form>
          <label htmlFor="amount" className="block mb-2">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter amount"
            disabled // Mocking as non-functional for now
          />
          {/* Add a submit button if needed */}
          {/* <button type="submit" className="btn btn-primary mt-4">Submit</button> */}
        </form>
      </div>
    </div>
  );
}