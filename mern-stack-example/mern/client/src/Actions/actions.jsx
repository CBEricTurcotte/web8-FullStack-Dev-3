// import React, { useState, useEffect } from "react";
// import Alert from "react-bootstrap/Alert";

// function BasicExample() {
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     if (showAlert) {
//       const timeout = setTimeout(() => {
//         setShowAlert(false);
//       }, 5000);

//       return () => clearTimeout(timeout);
//     }
//   }, [showAlert]);

//   const handleFailedLogin = () => {
//     setShowAlert(true);
//   };

//   return (
//     <>
//       <button onClick={handleFailedLogin}>Simulate Failed Login</button>
//       {showAlert && (
//         <Alert variant="danger">
//           This is a red alert for a failed login—check it out!
//         </Alert>
//       )}
//     </>
//   );
// }

// export default BasicExample;

// src/Actions/actions.js

// src/Actions/actions.jsx

import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

function FailedLoginAlert() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  const handleFailedLogin = () => {
    setShowAlert(true);
  };

  return (
    <>
      <button onClick={handleFailedLogin}>Simulate Failed Login</button>
      {showAlert && (
        <Alert variant="danger">
          This is a red alert for a failed login—check it out!
        </Alert>
      )}
    </>
  );
}

export default FailedLoginAlert;
