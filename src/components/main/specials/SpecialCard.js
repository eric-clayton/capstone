import '../../../css/main/specials/SpecialCard.css'
import deliveryIcon from '../../../images/specials/order delivery icon.svg'
function SpecialCard(props) {
    return(
        <div className="special-card">
            <div className="special-image">
                <img  src={props.image}></img>
            </div>
            <div className="special-card-heading">
                <h5>{props.title}</h5>
                <div>${props.price}</div>
            </div>
            <div className="special-desc">
                <p>{props.desc}</p>
            </div>
            <div className="special-footer">
                <p>Order a delivery</p>
                <img className="delivery-icon" src={deliveryIcon}></img>
            </div>
        </div>
    );
}
export default SpecialCard;