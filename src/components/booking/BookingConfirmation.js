import { Link } from "react-router-dom";

function BookingConfirmation() {
    return(
    <div style={{textAlign: "center", height: "50vh", marginTop: "3rem"}}>
        <h1>Table Booked!</h1>
        <Link to='/'>Back to Home</Link>
    </div>
    )
}
export default BookingConfirmation;