export default function ConfirmedBooking({ data, userName }) {
  const confirmedReservationCustomer = data;
  const [year, month, day] = confirmedReservationCustomer.date.split('-');

  const date = [month, day, year].join('/');
  const name = confirmedReservationCustomer["first-name"]+" "+confirmedReservationCustomer["last-name"];
  const email = confirmedReservationCustomer.email;
  const phone = confirmedReservationCustomer.phone;
  const seating = confirmedReservationCustomer.seating;
  const time = confirmedReservationCustomer.time;
  const guests = confirmedReservationCustomer.guests;
  const occasion = confirmedReservationCustomer.occasion;

  return (
    <section className="confirmed-booking">
        <h1>Congrats!</h1>
        <p>Your reservation has been secured!</p>
        <section>
          {!userName?
            <>
              <p>Name:<span className="confirmed-res-info">{name}</span></p>
              <p>Phone:<span className="confirmed-res-info">{phone}</span></p>
            </>
            :
            <p>Member:<span className="confirmed-res-info">{userName}</span></p>
          }
          <p>Date:<span className="confirmed-res-info">{date}</span></p>
          <p>Time:<span className="confirmed-res-info">{time}</span></p>
          <p>Seating:<span className="confirmed-res-info">{seating}</span></p>
          <p>Number of Guests:<span className="confirmed-res-info">{guests} Guests</span></p>
          <p>Occasion:<span className="confirmed-res-info">{occasion}</span></p>
        </section>
        {!userName?
          <p>We've sent an email to <span className="confirmed-res-info">{email} </span>with your confirmation</p>
          :
          <p>We've sent an email to your on-file account</p>
        }
        <p>If we are experiencing any difficulties fullfilling your
          requests, we will email and/or text you a notice 24 hours (or
          nearest applicable time) before your reservation date-time.
        </p>
    </section>
  );
};
