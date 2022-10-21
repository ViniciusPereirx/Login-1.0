import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "../../../style/SASS/style.scss";

const Signup = () => {
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  const [senha, setSenha] = useState();
  const [senhaConfirm, setSenhaConfirm] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleCadastro = () => {
    if (!email | !emailConfirm | !senha | !senhaConfirm) {
      setError("Preencha todos os campos!");
      return;
    } else if (email !== emailConfirm) {
      setError("Os e-mails não são iguais");
      return;
    } else if (senha !== senhaConfirm) {
      setError("As senhas não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="content">
        <label>CADASTRO</label>
        <input
          className="input"
          type={"email"}
          placeholder={"Digite seu E-mail"}
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <input
          className="input"
          type={"email"}
          placeholder={"Confirme seu E-mail"}
          value={emailConfirm}
          onChange={(e) => [setEmailConfirm(e.target.value), setError("")]}
        />
        <input
          className="input"
          type={"password"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <input
          className="input"
          type={"password"}
          placeholder={"Confirme sua Senha"}
          value={senhaConfirm}
          onChange={(e) => [setSenhaConfirm(e.target.value), setError("")]}
        />
        <div className="labelError">{error}</div>
        <button type="button" className="button" onClick={handleCadastro}>
          Cadastrar-se
        </button>
        <div className="labelSignup">
          Já tem uma conta?
          <strong>
            <em>
              <Link to={"/signin"}>&nbsp;Entre</Link>
            </em>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Signup;
