import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h1>coursify</h1>
      </Link>
    </div>
  );
};

export default Navbar;
