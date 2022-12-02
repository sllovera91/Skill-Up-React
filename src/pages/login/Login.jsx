/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/alkemy_logo.svg";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const loginForm = document.getElementById("loginform");
    if (!loginForm.checkValidity()) {
      e.stopPropagation();
    } else {
      loginForm.classList.add("was-validated");
      const authBody = {
        email,
        password
      };
    }
  };

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-sm-12">
            <div className="text-center my-5">
              <img src={logo} alt="AlkyBank" width="200"/>
            </div>
            <div className={`card shadow-lg ${styles.FormCard}`}>
              <div className={`card-body ${styles.FormContent}`}>
                <h1 className="fs-4 card-title fw-bold mb-4">Iniciar sesión</h1>
                <form method="POST" className="needs-validation" noValidate autoComplete="off" id="loginform" onSubmit={e => handleSubmit(e)}>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">Correo electrónico *</label>
                    <input id="email" type="email" className="form-control" name="email" required autoFocus onChange={e => handleInputChange(e)}/>
                    <div className="invalid-feedback">
                      Correo electrónico inválido
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className={`mb-2 w-100 ${styles.PasswordLabel}`}>
                      <label className="text-muted" htmlFor="password">Contraseña *</label>
                      <Link href="/cambio-contraseña">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <input id="password" type="password" className="form-control" name="password" required autoComplete="true" onChange={e => handleInputChange(e)}/>
                    <div className="invalid-feedback">
                      Debe ingresar una contraseña
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input type="checkbox" name="remember" id="remember" className="form-check-input"/>
                      <label htmlFor="remember" className="form-check-label">Recordarme</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  ¿No tienes una cuenta? <Link to="/registro" className="text-dark">Regístrate</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};
