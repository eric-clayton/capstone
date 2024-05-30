import TestimonialCard from "./TestimonialCard";
import  "../../../css/main/testimonials/Testimonials.css"
import John from "../../../images/testimonials/john.jpg"
function Testimonials() {
    return(
        <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial-card-container">
                    <TestimonialCard name="John" rating="5/5" image={John} desc="Great Greek Salad!"></TestimonialCard>
                    <TestimonialCard name="John" rating="5/5" image={John} desc="I loved the decore and the food was great as well."></TestimonialCard>
                    <TestimonialCard name="John" rating="5/5" image={John} desc="Great Greek Salad!"></TestimonialCard>
                    <TestimonialCard name="John" rating="5/5" image={John} desc="Great Greek Salad!"></TestimonialCard>
                </div>
        </section>
    );
}
export default Testimonials