import HomePage from './HomePage';
import BookingPage from '../booking/BookingPage';
import About from './About';
import Specials from './specials/Specials';
import BookingConfirmation from '../booking/BookingConfirmation';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../../css/main/Main.css"
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../api/api';
const initialTimes = []
export const initializeTimes = () => {
        const newDate = new Date();
        return fetchAPI(newDate);
}
export const updateTimes = (availableTimes, action) => {
    switch(action.type) {
        case("update_date"):
            if(action.payload){
                return fetchAPI(action.payload);
            }
            break;
        default:
            return initializeTimes();
    }
}
function Main() {
    const navigate = useNavigate();
    const submitForm = (formData) => {
        if(submitAPI(formData)) {
            navigate('/Booking-Confirmation')
        }
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes)
    return (
        <Routes>
            <Route path="/capstone/" element= {<HomePage />}></Route>
            <Route path="/capstone/Booking" element= {<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} ></Route>
            <Route path='/capstone/about' element={<About/>}></Route>
            <Route path='/capstone/order-online' element={<Specials/>}></Route>
            <Route path='/capstone/Booking-Confirmation' element={<BookingConfirmation/>}></Route>
        </Routes>
    );
}
export default Main;