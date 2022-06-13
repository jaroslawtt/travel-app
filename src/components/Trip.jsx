import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import * as trips from "../api/trips"
import Modal from "./Modal";
import "../styles/App.css"

const Trip = () => {
    let { tripId } = useParams();
    let [booking, setBooking] = useState(false);
    let {image,title,duration,level,description,price} = trips.filter(trip => trip.id === tripId)[0];
    const handleBook = () => {
       console.log(booking);
      setBooking(!booking);
    }
    return (
        <main>
        <div className="trip-page">
            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
                <img src = {image} className="trip__img" alt="trip image"/>
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong> {duration }</strong> days</span>
                            <span className="trip-info__level">{level}</span>
                        </div>
                    </div>
                    <div className="trip__description">
                        { description }
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong className="trip-price__value">{price}</strong>
                    </div>
                    <button className="trip__button button" onClick={handleBook}>Book a trip</button>
                </div>
            </div>
            <Modal trip={{image,title,duration,level,description,price}} booking={booking} handler={handleBook}/>
        </div>
        </main>
    );
};

export default Trip;