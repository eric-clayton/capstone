import Button from "../buttons/Button";
import '../../css/main/Hero.css'
function Hero() {
    return (
        <section className="Hero">
            <article>
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button link="/Booking">Reserve a Table</Button>
            </article>
            <figure>
                <img src="https://mohamed-safouen.github.io/Little-Limon-Restaurant/static/media/restauranfood.e8abf5b772b6817189aa.jpg"></img>
            </figure>
        </section>
    );
}
export default Hero;