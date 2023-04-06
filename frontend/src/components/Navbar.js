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
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>coursify</h1>
      </Link>
      <div className={styles.navLinks}>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick} className={styles.logoutButton}>
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div className={styles.links}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
