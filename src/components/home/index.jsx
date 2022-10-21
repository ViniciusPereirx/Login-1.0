import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../../style/SASS/style.scss";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Home</h2>
      <button className="button" onClick={() => [signout(), navigate("/")]}>
        Sair
      </button>
    </div>
  );
};
export default Home;
