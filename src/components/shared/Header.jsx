import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <h1 className="header__title"><Link to='/'>KOONOL</Link></h1>
      <ul className="nav__ul">
        <li className="active"><Link to={'/'}>Sitios web y tiendas</Link></li>
        <li className="active"><Link to={'/'}>Creador de páginas web</Link></li>
        <li className="active"><Link to={'/'}>Tienda online</Link></li>
        <li className="active"><Link to={'/'}>Plantillas de sitio web</Link></li>
        <li className="active"><Link to={'/'}>Características</Link></li>
        <li className="active"><Link to={'/'}>Planes y precios</Link></li>
        <li className="active"><Link to={'/about-us'}>Sobre Nosotros</Link></li>
      </ul>
    </nav>
  )
}

export default Header