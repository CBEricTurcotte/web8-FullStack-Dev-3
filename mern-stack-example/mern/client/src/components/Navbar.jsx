import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/home">
          <img
            alt="Rocket Logo"
            className="h-20 inline"
            src="src/images/RocketElevatorsLogo.png"
          ></img>
        </NavLink>
      </nav>
    </div>
  );
}
