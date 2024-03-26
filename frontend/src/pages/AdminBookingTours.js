import React, { useState, useEffect } from "react";

export default function AdminBookingTour() {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/api/v1/booking")
            .then((res) => res.json())
            .then((res) => {
                console.warn(res.data);
                setBooking(res.data);
            })
    }, []);

    // Check if booking is empty or undefined before rendering
    if (!booking || booking.length === 0) {
        return <div>No bookings available</div>;
    }

    const bookingShow = booking.map((boo) => {
        return (
            <div key={boo._id} className="card text-center mt-5">
                <div className="card-header fw-bold">
                    {boo.fullName}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Tour: {boo.tourName}</h5>
                    <h3 className="card-text">Guest: {boo.guestSize}</h3>
                    <h3 className="card-text">Phone: {boo.phone}</h3>
                </div>
            </div>
        )
    });

    return (
        <div>
            {bookingShow}
        </div>
    )
}
