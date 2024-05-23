import logo from '../images/Logo.svg'
import Nav from './Nav';
import "../css/Header.css"
function Header() {
    return (
        <header>
            <img src={logo}></img>
            <Nav></Nav>
        </header>
    );
}
export default Header;