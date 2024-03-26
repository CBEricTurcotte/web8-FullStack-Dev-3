
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export default function Unauthorized() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="src/images/RocketElevatorsLogo.png" // Update with your logo path
        alt="Error Logo"
        className="h-20 mb-8"
      />
      {showAlert && (
        <Alert variant="danger" className="w-full max-w-lg text-center mb-4">
          You are unauthorized to access this page. Redirecting to login page in
          5 seconds.
        </Alert>
      )}
      <h2 className="text-3xl font-bold mb-4">Unauthorized</h2>
      <Link
        to="/"
        className="text-blue-500 hover:underline focus:outline-none focus:ring focus:ring-blue-300 px-2 py-1"
      >
        Go back to login
      </Link>
    </div>
  );
}
