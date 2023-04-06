import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import styles from "./signup.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3>Log in</h3>
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

      <button disabled={isLoading}>Log in</button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
};

export default Login;
