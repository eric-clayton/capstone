import { useState } from "react";


function BookingForm(props) {
    function minDate(e) {
        e.target.min = new Date().toLocaleDateString('en-ca');
    }
    const [dateChanged, setDateChanged] = useState(false)
    const [timesDisabled, setTimesDisables] = useState(true);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Occasion")
    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }
        props.submitForm(formData)
    }
    function handleDateChange(e) {
        setDateChanged(true);
        console.log(e.target.value)
        const newDate = new Date(e.target.value);
        console.log(newDate)
        newDate != "Invalid Date" ? setTimesDisables(false) : setTimesDisables(true) ;
        props.dispatch({type:"update_date", payload: newDate})
        setDate(newDate)
    }
    return (
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={e => handleSubmit(e)}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" required onFocus={e => minDate(e)} onChange={e => handleDateChange(e)}/>
            <label htmlFor="res-time">Choose time</label>
            {timesDisabled && dateChanged && <p style={{fontSize: "0.7rem", color: "red"}}>*Please pick a date</p>}
            <select id="res-time"  disabled={timesDisabled} required onChange={e => setTime(e.target.value)}>
                {props.availableTimes.map(t =>
                    <option key={t} value={t}>{t}</option>
                 )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={e => setOccasion(e.target.value)}>
                <option>Occasion</option>
                <option>Engagement</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" role="button" aria-label="On Click" disabled={timesDisabled}/>
        </form>
    );
}
export default BookingForm;