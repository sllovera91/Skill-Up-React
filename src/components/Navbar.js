

export const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <div className="container-fluid">

    <a className="navbar-brand">
      <img src="https://res.cloudinary.com/dzko626wf/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669736491/ra6y0vlvmxqeo4valime.jpg" />
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Entra a tu Cuenta!</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Carga Saldo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tus Gastos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Movimientos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Manda Plata!</a>
        </li>
      </ul>
    </div>

    </div>
   </nav>
    
  )
}
