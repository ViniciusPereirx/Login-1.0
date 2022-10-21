import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "../../../style/SASS/style.scss";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos!");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="container">
      <div className="content">
        <label>LOGIN</label>

        <input
          className="input"
          type={"email"}
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <input
          className="input"
          type={"password"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <div className="labelError">{error}</div>
        <button type="button" className="button" onClick={handleLogin}>
          Entrar
        </button>
        <div className="labelSignin">
          Não tem conta?
          <strong>
            <em>
              <Link to={"/signup"}>&nbsp;Registre-se</Link>
            </em>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Signin;
