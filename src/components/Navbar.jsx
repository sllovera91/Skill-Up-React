
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
  const { Logout } = useAuth();

  const navigate = useNavigate();

  return (
   <nav className="header navbar navbar-expand-md">
    <div className="container-fluid">

    <Link className="navbar-brand" to="/">
      <img src="https://res.cloudinary.com/dzko626wf/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669736491/ra6y0vlvmxqeo4valime.jpg" alt="AlkyBank"/>
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Balance">Balance</NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/Movimientos">Movimientos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/CargaSaldo">Carga Saldo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/EnvioDinero">Manda Plata!</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Gastos">Tus Gastos</NavLink>
        </li>
        <li className="nav-item">
          <Link to={'/'} className="nav-link" onClick={Logout}>Salir</Link>
        </li>

      </ul>
    </div>

    </div>
   </nav>

  );
};
