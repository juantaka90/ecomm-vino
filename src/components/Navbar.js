import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link }  from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<Link to='/'><a className="navbar-brand" href="/category/:id">Vinos Atlas</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/category/30'><a className="nav-link active" aria-current="page" href="/category/:id">Vinos Tintos</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/category/36'><a className="nav-link" aria-current="page" href="/category/:id">Vinos Blancos</a></Link>
        </li>
        <Link to='/category/42'><a className="nav-link" aria-current="page" href="/category/:id">Cosecha Tardia</a></Link>
        <li className="nav-item">
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
