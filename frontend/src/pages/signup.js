import { useState } from "react";
import styles from "./signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <label>
        Email:
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button>Sign up</button>
    </form>
  );
};

export default Signup;
