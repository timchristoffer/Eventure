import React, { useState } from "react";
import './EventCard.css';

const EventCard = ({ event }) => {

    const eventImg = event.eventPicture?.url
    ? `http://localhost:1337${event.eventPicture.url}`
    : '';

    const eventDateTime = new Date(event.eventTime)

    const eventDate = eventDateTime.toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const eventTime = eventDateTime.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
    });


    return (
        <div className="EventCardFrame">
            <div className="EventCard">
                {eventImg && <img
                src={eventImg}
                onError={(e) => console.error('Image load error: ', e)}
                />}
                <h2>{event.eventTitle}</h2>
                <div className="EventDetails">
                    <p className="EventDate">Date: {eventDate}</p>
                    <p className="EventTime">Time: {eventTime}</p>
                    <p>Place: {event.eventVenue}</p>
                    <p>Price: {event.eventPrice}kr</p>
                    <p>Host: {event.host?.hostName || 'Unknown host'}</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard