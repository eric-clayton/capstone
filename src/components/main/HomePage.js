import Hero from "./Hero";
import Specials from "./specials/Specials";
import Testimonials from "./testimonials/Testimonials";
import About from "./About";
import { Routes, Route } from "react-router-dom";
function HomePage() {
    return (
        <main>
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials/>
            <About></About>
        </main>
    );
}
export default HomePage;