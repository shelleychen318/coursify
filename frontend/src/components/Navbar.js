import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <h1>coursify</h1>
      </Link>
      <nav>
        <div className={styles.links}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
