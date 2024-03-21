import React from "react";

export default function Transaction() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Transaction Page</h1>
      {/* List component for displaying transactions */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-2">
          List of Transactions (Last 10)
        </h2>
        {/* Placeholder for the list of transactions */}
        <ul>
          {/* Display the last 10 transactions */}
          {/*
            Replace the following placeholder li elements with actual transaction items
            Example:
            <li key={transaction.id}>{transaction.amount}</li>
          */}
          <li>Transaction 1</li>
          <li>Transaction 2</li>
          {/* Add more transactions as needed */}
        </ul>
      </div>

      {/* Form component for entering transaction amount */}
      <div>
        <h2 className="text-lg font-medium mb-2">Enter Transaction Amount</h2>
        {/* Placeholder form for entering transaction amount */}
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
