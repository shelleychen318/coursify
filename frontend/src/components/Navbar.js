import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className={styles.navContainer}>
      <Link to="/" className={styles.logo}>
        <h1>coursify</h1>
      </Link>
      <div>
        {user && (
          <div className={styles.navLinks}>
            <span>{user.email}</span>
            <button onClick={handleClick} className={styles.logoutButton}>
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div className={styles.loginLinks}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
