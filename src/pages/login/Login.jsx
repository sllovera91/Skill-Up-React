// eslint-disable-file no-use-before-define
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/alkemy_logo.svg';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import styles from './Login.module.css';
import Swal from 'sweetalert2';

const loginInputs = {
  email: '',
  password: ''
};

export const Login = () => {
  const { Login, errorMessage } = useAuth();

  const { email, password, onInputChange } = useForm(loginInputs);

  const handleSubmit = e => {
    e.preventDefault();
    Login({ email, password });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      useEffect(() => {
        if (errorMessage !== undefined) {
          Swal.fire('Tus datos no son correctos', errorMessage, 'error');
        }
      }, [errorMessage]);
    }
  }, [errorMessage]);

  return (
    <section className="h-100 animate__animated animate__fadeIn">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-sm-12">
            <div className="text-center my-5">
              <img src={logo} alt="AlkyBank" width="200"/>
            </div>
            <div className={`card shadow-lg ${styles.FormCard}`}>
              <div className={`card-body ${styles.FormContent}`}>
                <h1 className="fs-4 card-title fw-bold mb-4">Iniciar sesión</h1>
                <form method="POST" className="needs-validation" noValidate autoComplete="off" id="loginform" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">Correo electrónico *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese su correo electronico"
                      name="email"
                      value={ email }
                      required
                      autoFocus
                      onChange={onInputChange}
                      />
                    <div className="invalid-feedback">
                      Correo electrónico inválido
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className={`mb-2 w-100 ${styles.PasswordLabel}`}>
                      <label className="text-muted" htmlFor="password">Contraseña *</label>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      required
                      autoComplete="true"
                      onChange={onInputChange}
                    />
                    <div className="invalid-feedback">
                      Debe ingresar una contraseña
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary ms-auto w-100">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  ¿Todavia no sos Alkymer? <Link to="/Register" className="text-dark">Unite</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};
