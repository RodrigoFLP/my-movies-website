import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/LoginCard.module.css";
import logo from "/logo.svg";
import { Button } from "./Buttons/Button";

import validationLogin from "../utils/schemas/validationLogin";
import { LoginInput } from "../interfaces/login";

import { login } from "../store/slices/authSlice";
import { useLoginMutation } from "../store/services/auth";
import { useAppDispatch } from "../store/hooks";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({ resolver: yupResolver(validationLogin) });

  const navigate = useNavigate();

  const [loginMutation, data] = useLoginMutation();

  const dispatch = useAppDispatch();

  //save token to localStorage when login is successful and redirect to home
  useEffect(() => {
    if (data.isSuccess) {
      localStorage.setItem("token", data.data.token);
      navigate("/");
    }
  }, [data]);

  const onSubmit: SubmitHandler<LoginInput> = async (data: LoginInput) => {
    try {
      const { token } = await loginMutation(data).unwrap();
      dispatch(login({ token }));
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
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
