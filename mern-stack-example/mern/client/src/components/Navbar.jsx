// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="flex justify-between items-center mb-6">
//         <NavLink to="/home">
//           <img
//             alt="Rocket Logo"
//             className="h-20 inline"
//             src="src/images/RocketElevatorsLogo.png"
//           ></img>
//         </NavLink>
//       </nav>
//     </div>
//   );
// }

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Assume username is obtained from login and stored in localStorage
  const username = localStorage.getItem("username");

  return (
    <nav className="flex justify-between items-center mb-6">
      <NavLink to="/home">
        <img
          alt="Rocket Logo"
          className="h-20 inline"
          src="src/images/RocketElevatorsLogo.png"
        ></img>
      </NavLink>
      {username ? (
        <span className="text-lg font-semibold">{username}</span>
      ) : (
        <NavLink to="/">Login</NavLink>
      )}
    </nav>
  );
}
