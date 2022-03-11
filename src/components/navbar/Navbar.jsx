import { Link } from "react-router-dom";
import CartWidget from '../cart/CartWidget';

const Navbar = () => {
  return (
    <header className="header">

      <Link to='/' className="logo">GEN<span>KI SU</span>SHI </Link>

      <nav className="navbar">
        <Link to='/'>Todos</Link>
        <Link to='/category/clasicos'>Clásicos</Link>
        <Link to='/category/makis'>Makis</Link>
        <Link to='/category/fritos'>Fritos</Link>
        <Link to='/category/argentos'>Argentos</Link>
        <Link to='/category/esa'>Especiales sin Arroz</Link>
        <Link to='/category/eca'>Especiales con Arroz</Link>
      </nav>

      <CartWidget />

    </header>
  );
};

export default Navbar;