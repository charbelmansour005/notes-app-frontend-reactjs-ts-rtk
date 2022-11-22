import React, { useState, FC } from "react";
import axios from "axios";
import { LoginURL } from "../helper/app-helper";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigate = useNavigate();

  type CreateLoginResponse = {
    token: string;
    userId: string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post<CreateLoginResponse>(LoginURL, payload);
      let token: string = response.data.token;
      let userId: string = response.data.userId;
      localStorage.setItem("Token", token);
      localStorage.setItem("userId", userId);
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input onChange={handleEmailChange} placeholder="Enter Email" />
      </div>
      <div>
        <label>Password</label>
        <input onChange={handlePasswordChange} placeholder="Enter Password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
