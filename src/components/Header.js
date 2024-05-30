import logo from '../images/Logo.svg'
import Nav from './Nav';
import "../css/Header.css"
function Header() {
    return (
        <header>
            <figure><img src={logo}></img></figure>
            <Nav></Nav>
        </header>
    );
}
export default Header;