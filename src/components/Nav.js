import "../css/Nav.css"
import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/'>MENU</Link></li>
                <li><Link to='/booking'>RESERVATIONS</Link></li>
                <li><Link to='/order-online'>ORDER ONLINE</Link></li>
                <li><Link to='/'>LOGIN</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;