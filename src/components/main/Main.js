import Hero from "./Hero";
import Specials from "./specials/Specials";
import Testimonials from "./testimonials/Testimonials";
import About from "./About";
import "../../css/main/Main.css"
function Main() {
    return (
        <main>
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    );
}
export default Main;