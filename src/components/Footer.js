import "../css/Footer.css"
import logo from "../images/footer/little-lemon-green.png"
function Footer() {
    return (
        <footer>
            <figure>
                <img src={logo} alt="Little Lemon Logo"></img>
            </figure>
            <div>
                <h2>Doormat Navigation</h2>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservation</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <ul>
                    <li><a>Adress</a></li>
                    <li><a>phone number</a></li>
                    <li><a>email</a></li>
                </ul>
            </div>
            <div>
                <h2>Social Media Links</h2>
                <ul>
                    <li><a>Adress</a></li>
                    <li><a>phone number</a></li>
                    <li><a>email</a></li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;