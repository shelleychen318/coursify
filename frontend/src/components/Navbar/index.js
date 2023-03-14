import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>coursify</h1>
      </Link>
    </div>
  );
};

export default Navbar;
