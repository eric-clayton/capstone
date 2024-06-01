import BookingForm from "./BookingForm";
function BookingPage(props) {
    return (
        <main style={{width: 'max-content', margin: "10rem auto"}}>
            <h1>Book Now</h1>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}></BookingForm>
        </main>
    );
}
export default BookingPage;