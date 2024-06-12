import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [isLogin, useIsLogin] = useState(true);

  return (
    <div className="full-body">
      <div className="login-container">
        <div className="logo">Vinden</div>
        {isLogin ? (
          <div className="login">
            <p>Login</p>
            <form>
              <input type="email" name="email" placeholder="email" />
              <input type="password" name="senha" placeholder="senha" />
              <button type="button">Entrar</button>
              <a onClick={() => useIsLogin(false)}>registre-se aqui!</a>
            </form>
          </div>
        ) : (
          <div className="login">
            <p>Registro</p>
            <form autoComplete="off">
              <input type="text" name="nome" placeholder="nome" />
              <input type="text" name="username" placeholder="username" />
              <input type="email" name="email" placeholder="email" />
              <input type="phone" name="phone" placeholder="telefone" />
              <input type="password" name="senha" placeholder="senha" />
              <button type="button">Registrar</button>
              <a onClick={() => useIsLogin(true)}>
                já tem uma conta? faça login!
              </a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
