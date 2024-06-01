import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { updateTimes} from "../main/Main";
import { fetchAPI } from "../../api/api";
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {

    const dispatch = jest.fn();
    const submitForm = jest.fn();
    const fixedDate = new Date('2024-01-01');
    const initialTimes =fetchAPI(fixedDate);
    render(<BrowserRouter><BookingForm availableTimes={initialTimes} dispatch={dispatch} submitForm={submitForm} /></BrowserRouter>);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})
test("initializeTimes", () => {
    const fixedDate = new Date('2024-01-01');
    const initialTimes = fetchAPI(fixedDate);
    const emptyTimes = [];
    expect(initialTimes).not.toEqual(emptyTimes);
});
test("updateTimes", () => {
    const fixedDate = new Date('2024-01-01');
    const action = {
        type: "update_date",
        payload: fixedDate
    }
    console.log(fixedDate)
    const expectedTimes = fetchAPI(fixedDate);
    const updatedTimes = updateTimes(expectedTimes, action);
    expect(updatedTimes).toEqual(expectedTimes);
});
test('Date is required', () => {
    const fixedDate = new Date('2024-01-01');
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    const initialTimes = fetchAPI(fixedDate);
    render(<BrowserRouter><BookingForm availableTimes={initialTimes} dispatch={dispatch} submitForm={submitForm} /></BrowserRouter>);
    const dateField = screen.getByLabelText(/Choose date/)
    expect(dateField).toHaveAttribute("required")
});
test('Time is required', () => {
    const fixedDate = new Date('2024-01-01');
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    const initialTimes = fetchAPI(fixedDate);
    render(<BrowserRouter><BookingForm availableTimes={initialTimes} dispatch={dispatch} submitForm={submitForm} /></BrowserRouter>);
    const timeField = screen.getByLabelText(/Choose time/)
    expect(timeField).toHaveAttribute("required")
});
test('Submit Form is disabled when time is disabled', () => {
    const fixedDate = new Date('2024-01-01');
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    const initialTimes = fetchAPI(fixedDate);
    render(<BrowserRouter><BookingForm availableTimes={initialTimes} dispatch={dispatch} submitForm={submitForm} /></BrowserRouter>);

    const timeField = screen.getByLabelText(/Choose time/)
    expect(timeField).toHaveAttribute("disabled")

    const submitButton = screen.getByRole("button")
    expect(submitButton).toHaveAttribute("disabled")
    expect(submitForm).not.toHaveBeenCalled()
});