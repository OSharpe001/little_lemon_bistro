import CustomerInfoForm from "./CustomerInfoForm";
import React, { useState } from "react";

export default function BookingForm(props) {

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
    const today = [year, month, day].join("-");
    const timeSelection = props.availableTimes();

    const [resTime, setResTime] = useState(props.availableTimes(today)[0]);
    const [resDate, setResDate] = useState(today);
    const [guests, setGuests] = useState("1");
    const [guestsError, setGuestsError] = useState("");
    const [occasion, setOccasion] = useState("");
    const [occasionError, setOccasionError] = useState("");
    const [requests, setRequests] = useState("");
    const [requestsError, setRequestsError] = useState("");
    const [reservationTerms, setReservationTerms] = useState(false);

    const clearForm = () => {
        props.info.setFirstName("");
        props.info.setLastName("");
        props.info.setEmail("");
        props.info.setPhone("");
        props.setSeating("Indoor")
        setResDate(today);
        setGuests("1");
        setOccasion("Occasion");
        setRequests("");
        setReservationTerms(false);
    };

    const disabled = !props.userName?(!!(guestsError) || !!(occasionError) || !!(requestsError) || !!(props.info.phoneError) || !!(props.info.emailError) || !!(props.info.firstNameError) || !!(props.info.lastNameError)):!!occasionError;
    const gotRequiredInfo = !props.userName?(!!props.info.firstName && !!props.info.lastName && !!props.info.email && !!props.info.phone & !disabled):!disabled && occasion;

    const setSubmissionErrors = () => {
        if (occasion === "") {
            setOccasionError("What's the occasion?");
        };
        if (props.info.firstName === ""){
            props.info.setFirstNameError("All fields are required.");
        };
        if (props.info.lastName === ""){
            props.info.setLastNameError("All fields are required.");
        };
        if (props.info.email === ""){
            props.info.setEmailError("All fields are required.");
        };
        if (props.info.phone === ""){
            props.info.setPhoneError("All fields are required.");
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!gotRequiredInfo) {
            setSubmissionErrors();
            return
        } else if (reservationTerms === false){
            alert("Do you agree to our terms of service?");
        } else {
            setOccasionError("");
            props.submitForm({
                "first-name":props.info.firstName,
                "last-name":props.info.lastName,
                "email":props.info.email,
                "phone":props.info.phone,
                "seating":props.seating,
                "date":resDate,
                "time":resTime,
                "guests":guests,
                "occasion":occasion,
                "requests":requests
            });
            clearForm();
        };
    };

    const handleSeatingChange = (e) => {
        props.setSeating(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
        if (e.target.value < 2) {
            setGuestsError("Reservations have a two-party minimum");
            return;
        } else if (e.target.value >9) {
            setGuestsError("Reservations have a ten-party maximum");
        } else {
            setGuestsError("");
        };
    };

    const handleDateChange= (e) => {
        if (e.target.value<today) {
            return null
        } else { return (
            setResDate(e.target.value),
            props.dispatch({type: "select", payload: e.target.value}))
        };
    };
    const handleTimeChange = (e) => {
        setResTime(e.target.value);
    };

    const handleOccasionChange = (e)=> {
        setOccasion(e.target.value);
        e.target.value===""?setOccasionError("What's the occasion?"):setOccasionError("");
    };

    const handleRequestsChange = (e) => {
        setRequests(e.target.value);
        if (e.target.value.length > 250) {
            setRequestsError("No more than 250 characters, please.");
            return;
        } else {
            setRequestsError("");
        };
    };

    const handleTermsChange = (e) => {
        setReservationTerms(!reservationTerms);
    };

    return (
        <form
        className="form"
        onSubmit={handleSubmit}
        >
            {!props.userName?(
                <>
                <h2>Personal Info</h2>
                <CustomerInfoForm info={props.info}/>
                </>
                )
                :null
            }

            <h2>Reserve a Table</h2>

            <div className="seating">
            <input
                    type="radio"
                    id="indoor"
                    checked={props.seating==="Indoor"}
                    name="seating"
                    value="Indoor"
                    onChange={handleSeatingChange}
                    />
                <label htmlFor="indoor">Indoors</label>

                <input
                    type="radio"
                    id="outdoor"
                    checked={props.seating==="Outdoor"}
                    name="seating"
                    value="Outdoor"
                    onChange={handleSeatingChange}
                    />
                <label htmlFor="outdoor">Outdoors</label>
            </div>

            <label htmlFor="res-date">Choose Date <sup>*</sup></label>
            <input
            type="date"
            id="res-date"
            name="res-date"
            value={resDate}
            onChange={handleDateChange}
            onBlur={handleDateChange}
            />

            <label htmlFor="res-time">Choose Time <sup>*</sup></label>
            <select
            id="res-time"
            name="res-time"
            value={resTime}
            onChange={handleTimeChange} >
                {timeSelection.map((time) => <option key={time}>{time}</option>)}
            </select>

            <label htmlFor="guests">Number of Guests <sup>*</sup></label>
            <input
            type="number"
            min="1" max="9"
            id="guests"
            name="guests"
            value={guests}
            onChange={e => handleGuestsChange(e)}
            />
            {guestsError?<p className="error-message">{guestsError}</p>:null}

            <label htmlFor="occasion">Occasion <sup>*</sup></label>
            <select
            id="occasion"
            name="occasion"
            style={occasion?{color: "#EDEFEE", backgroundColor: "#495E57"}:null}
            value={occasion}
            onChange={handleOccasionChange}
            onFocus={handleOccasionChange}>
                <option value="" >Occasion</option>
                <option value="Birthday" >Birthday</option>
                <option value="Engagement" >Engagement</option>
                <option value="Anniversary" >Anniversary</option>
                <option value="Other" >Other. . .</option>
            </select>
            {occasionError?<p className="error-message">{occasionError}</p>:null}

            <label htmlFor="requests">Comments/Requests</label>
            <textarea
            rows={5}
            placeholder="Additional Comments or Requests"
            id="requests"
            name="requests"
            value={requests}
            onChange={handleRequestsChange}
            />
            {requestsError?<p className="error-message">{requestsError}</p>:null}

            <div className="terms">
                <input
                type="checkbox"
                id="terms"
                name="terms"
                onChange={handleTermsChange}
                />
                    <label htmlFor="terms">Agree to our <a style={props.seating==="Indoor"?{color: "red"}:null} aria-label="On Click" className="terms-link" href="/terms">Terms of Service</a> <sup>*</sup>
                    </label>
            </div>

            <input
            style={disabled?{border: "1px solid #999999", backgroundColor: "#cccccc", color: "#666666", cursor: "not-allowed"}:null}
            disabled={disabled}
            className="button"
            type="submit"
            value="Set Reservation!"
            aria-label="On Click"
            />
        </form>
    );
};