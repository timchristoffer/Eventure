import React, { useState } from "react";
import './EventCard.css';

const EventCard = ({ event }) => {

    const eventImg = event.eventPicture?.url
    ? `http://localhost:1337${event.eventPicture.url}`
    : '';

    const eventDateTime = new Date(event.eventTime)
    const readableEventTime = eventDateTime.toLocaleString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });


    return (
        <div className="EventCard">
            {eventImg && <img
            src={eventImg}
            onError={(e) => console.error('Image load error: ', e)}
            />}
            <h2>{event.eventTitle}</h2>
            <p>{readableEventTime}</p>
            <p>{event.eventVenue}</p>
            <p>{event.eventPrice}kr</p>
            <p>{event.eventTime}</p>
            <p>{event.host.hostName}</p>
        </div>
    )
}

export default EventCard