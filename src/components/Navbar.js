import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link }  from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<Link to='/'><a className="navbar-brand" href="#">Vinos Atlas</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/category/30'><a className="nav-link active" aria-current="page" href="#">Vinos Tintos</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/category/36'><a className="nav-link">Vinos Blancos</a></Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <Link to='/category/42'> <a className="nav-link" href="#"></a>Cosecha Tardia </Link>
        </a>
        </li>
        {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li> */}
        <li className="nav-item">
        <a className="nav-link disabled"></a>
        </li>
    </ul>
    <CartWidget/>
    </div>
</div>
</nav>
        </div>
    );
}

export default Navbar;
