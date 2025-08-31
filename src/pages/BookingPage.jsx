import { useState } from "react";

import { BookingForm } from "../components";


export default function BookingPage({
    info,
    availableTimes,
    dispatch,
    submitForm,
    userName
}) {

    const [seating, setSeating] = useState("Indoor");

    return (
        <section
        className={seating==="Indoor"?"booking-page indoor":"booking-page outdoor"}>
            <BookingForm
                info={info}
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
                seating={seating}
                setSeating={setSeating}
                userName={userName}
            />
        </section>
    );
};