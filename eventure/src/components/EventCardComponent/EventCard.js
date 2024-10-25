import React, { useState } from "react";
import './EventCard.css';

const EventCard = ({ event }) => {

    const eventImg = event.eventPicture?.url
    ? `http://localhost:1337${event.eventPicture.url}`
    : '';


    return (
        <div className="EventCard">
            {eventImg && <img
            src={eventImg}
            onError={(e) => console.error('Image load error: ', e)}
            />}
            <h2>{event.eventTitle}</h2>
            <p>{event.eventVenue}</p>
        </div>
    )
}

export default EventCard