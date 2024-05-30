import "../../../css/main/testimonials/TestimonialCard.css"
function TestimonialCard(props) {
    return (
    <div className="testimonial-card">
        <p>{props.rating}</p>
        <div className="testimonial-middle">
            <img src={props.image} alt="Image of reviewer"></img>
            <p className="testimonial-name">{props.name}</p>
        </div>
        <p>{props.desc}</p>
    </div>
    );
}
export default TestimonialCard;