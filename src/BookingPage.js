import React, { useState } from 'react';

function BookingPage({ availableTimes = [], dispatch }) {
    const [date, setDate] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'dateChange', date: e.target.value });
    };

    return (
        <main>
            <section className="booking-hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Reserve a Table</h1>
                        <h2>Little Lemon Chicago</h2>
                        <p>Book your table for an unforgettable Mediterranean dining experience.</p>
                    </div>
                </div>
            </section>

            <section className="booking-form">
                <div className="container">
                    <h2>Booking Details</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                value={date}
                                onChange={handleDateChange}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <select id="time" name="time" required>
                                <option value="">Select a time</option>
                                {availableTimes.map(time => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="guests">Number of guests:</label>
                            <input type="number" id="guests" name="guests" min="1" max="10" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="occasion">Occasion:</label>
                            <select id="occasion" name="occasion">
                                <option value="">Select an occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="business">Business</option>
                                <option value="casual">Casual</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn-primary">Make Reservation</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default BookingPage;
