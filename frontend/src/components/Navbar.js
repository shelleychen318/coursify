import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>coursify</h1>
      </Link>
      <div className={styles.navLinks}>
        <div>
          <button onClick={handleClick} className={styles.logoutButton}>Log out</button>
        </div>
        <div className={styles.links}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
