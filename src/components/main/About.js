import { Route } from 'react-router-dom';
import '../../css/main/About.css'
import MarioA from "../../images/Mario and Adrian A.jpg"
import MarioB from "../../images/Mario and Adrian b.jpg"
function About() {
    return (
        <section className="about">
            <div>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. The restaurant
                    features a locally-sourced menu with daily specials.
                </p>
            </div>
            <div className="fig-container">
                <figure className="figure-one">
                    <img src={MarioA} alt="Mario and adrian"></img>
                </figure>
                <figure className="figure-two">
                    <img src={MarioB} alt="Mario and adrian"></img>
                </figure>
            </div>
        </section>
    )
}
export default About;