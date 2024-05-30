import "../../../css/main/specials/Specials.css"
import SpecialCard from "./SpecialCard"
import Button from "../../buttons/Button"
import GreekSalad from "../../../images/specials/greek salad.jpg"
import Bruchetta from "../../../images/specials/bruchetta.svg"
import LemonDessert from "../../../images/specials/lemon dessert.jpg"

const greekSaladDesc= `The Famous greek salad of crispy lettuce, peppers, olives and
                         our Chicago style feta cheese garnished with crunchy garlic
                         and rosemary croutons.`
const bruschettaDesc= `Our Bruschetta is made from grilled bread that has been smeared
                         with garlic and seasoned with salt and pepper.`
const lemonDessertDesc= `This comes straight from grandma's recipe book, every last
                         ingredient has been sourced as authentic as can be imagined.`

function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2 className="specials-title">This weeks specials!</h2>
                <Button>Online Menu</Button>
            </div>
            <section className="specials-card-container">
                <SpecialCard image={GreekSalad} title="Greek Salad" desc={greekSaladDesc} price="12.99"></SpecialCard>
                <SpecialCard image={Bruchetta} title="Bruschetta" desc={bruschettaDesc} price="5.99"></SpecialCard>
                <SpecialCard image={LemonDessert} title="Lemon Dessert" desc={lemonDessertDesc}price="5.00"></SpecialCard>
            </section>
        </section>
    );
}
export default Specials;