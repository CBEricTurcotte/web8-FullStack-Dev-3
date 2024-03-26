// import React, { useState, useEffect } from "react";
// import Alert from "react-bootstrap/Alert";

// function FailedLoginAlert() {
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

// export default FailedLoginAlert;

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

function SuccessNotification({ message }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  useEffect(() => {
    if (message) {
      setShowAlert(true);
    }
  }, [message]);

  return <>{showAlert && <Alert variant="success">{message}</Alert>}</>;
}

export { FailedLoginAlert, SuccessNotification };
