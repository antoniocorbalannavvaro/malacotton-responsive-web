import { Link } from "react-router-dom";
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-light bg-dark">
      <a className="navbar-brand"><h1 className={style.mala}>MALA COTTON</h1></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link text-light" to='/'>Home</Link>
          <Link className="nav-item nav-link text-light" to='/concerts'>Conciertos</Link>
          <Link className="nav-item nav-link text-light" to='/releases'>Lanzamientos</Link>
          <Link className="nav-item nav-link text-light" to='/contact'>Contacto</Link>
          <Link className="nav-item nav-link text-light" to='/about'>El Dream Team</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
