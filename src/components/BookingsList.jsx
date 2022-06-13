import React, {useState} from 'react';
import Booking from "./Booking";
import * as bookings from "../api/bookings";
const BookingsList = () => {
    let [booked,setBooked] = useState([...bookings.filter((a,b)=> {
        if(a.date > b.date)return 1;
        else if(a.date === b.date) return 0;
        else return -1;
    })]);
    const deleteBooking = (tripId) => {
        setBooked([...booked.filter((trip) => trip.id !== tripId).filter((a,b)=> {
            if(a.date > b.date)return 1;
            else if(a.date === b.date) return 0;
            else return -1;
        })]);
    }
    return (
            <main className="bookings-page">
                <h1 className="visually-hidden">Travel App</h1>
                {booked.length === 0
                    ?
                    <h2 style={{textAlign:"center"}}>Not yet</h2>
                    :
                    <ul className="bookings__list">
                        {booked.map(bookedTrip => {
                            return <Booking removeItem={deleteBooking} {...bookedTrip}/>
                        })}
                    </ul>
                }
            </main>
    );
};

export default BookingsList;