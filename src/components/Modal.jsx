import React, {useState} from 'react';

const Modal = (props) => {
    console.log(props.booking);
    let [bookingState, setBookingState] = useState({
        date: new Date(),
        guests: 1,
        price: props.trip.price,
    })
    const changeGuestsHandler = (changes) => {
        setBookingState({...bookingState, guests: changes, price: changes*props.trip.price});
    }
    const changeDateHandler = (changes) => {
        setBookingState({...bookingState, date: changes});
    }
    return (
        <div style={{display: !props.booking?"none":"block"}}>
            <div className="modal">
                <div className="trip-popup">
                    <button className="trip-popup__close" onClick={props.handler}>×</button>
                    <form className="trip-popup__form" autoComplete="off">
                        <div className="trip-info">
                            <h3 className="trip-info__title">{props.trip.title}</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>{props.trip.duration}</strong> days</span>
                                <span className="trip-info__level">{props.trip.level}</span>
                            </div>
                        </div>
                        <label className="trip-popup__input input">
                            <span className="input__heading">Date</span>
                            <input name="date" type="date" value={bookingState.date} onChange={(event) => {changeDateHandler(event.target.value)}} required/>
                        </label>
                        <label className="trip-popup__input input">
                            <span className="input__heading">Number of guests</span>
                            <input name="guests" type="number" min="1" max="10" value={bookingState.guests} onChange={(event) => {changeGuestsHandler(event.target.value)}} required/>
                        </label>
                        <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value">{bookingState.price}</output>
            </span>
                        <button className="button" type="submit">Book a trip</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;