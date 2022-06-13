import React from 'react';
const Booking = (props) => {
    const onClick = (tripId) => {
        props.removeItem(tripId);
    }
    return (
        <li className="booking">
            <h3 className="booking__title">{props.title}</h3>
            <span className="booking__guests">{props.guests} guests</span>
            <span className="booking__date">{new Date(props.date).toLocaleDateString()}</span>
            <span className="booking__total">{props.totalPrice}$</span>
            <button className="booking__cancel" title="Cancel booking" onClick={()=> {onClick(props.id)}}>
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    );
};

export default Booking;