import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "../styles/LoginCard.module.css";
import logo from "/logo.svg";
import { LoginInput } from "../interfaces/login";
import validationLogin from "../utils/schemas/validationLogin";

export const LoginCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({ resolver: yupResolver(validationLogin) });

  const onSubmit: SubmitHandler<LoginInput> = async (data: LoginInput) => {
    try {
    } catch {}
  };

  return (
    <div className={styles.card}>
      <img className={styles.logo} data-testid="logo" src={logo} />
      <h2>Log In</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["label-container"]}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <span className={styles.error}>{errors.email?.message}</span>
        </div>
        <input
          {...register("email")}
          id="email"
          className={styles.input}
          placeholder="Email"
          data-testid="email-input"
        />
        <div className={styles["label-container"]}>
          <label className={styles.label} htmlFor="email">
            Password
          </label>
          <span className={styles.error}>{errors.password?.message}</span>
        </div>
        <input
          {...register("password")}
          type="password"
          className={styles.input}
          placeholder="Email"
          data-testid="pwd-input"
        />

        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginCard;
