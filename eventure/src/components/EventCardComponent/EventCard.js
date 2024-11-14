import React, { useState, useEffect } from "react";
import './EventCard.css';
import axios from "axios";

const EventCard = ({ event }) => {

    const [currentEvent, setCurrentEvent] = useState({})
    const documentId = event.documentId;
    
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`http://localhost:1337/api/events/${documentId}?populate=*`);
            console.log("Response data:", response.data);
            setCurrentEvent(response.data.data);
          } catch (error) {
            console.error('Error fetching Event:', error);
            alert("Failed to fetch Event");
          }
        };
        
        getData();
      }, [documentId]);

    const eventImg = currentEvent.eventPicture?.url
    ? `http://localhost:1337${currentEvent.eventPicture.url}`
    : '';

    const eventDateTime = new Date(currentEvent.eventTime)

    const eventDate = eventDateTime.toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const eventTime = eventDateTime.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
    });
    console.log(currentEvent)
    return (
        <div className="EventCardFrame">
            <div className="EventCard">
                {eventImg && <img
                src={eventImg}
                alt={currentEvent.eventTitle}
                onError={(e) => console.error('Image load error: ', e)}
                />}
                <h2>{currentEvent.eventTitle}</h2>
                <div className="EventDetails">
                    <p className="EventDate">Date: {eventDate}</p>
                    <p className="EventTime">Time: {eventTime}</p>
                    <p>Place: {currentEvent.eventVenue}</p>
                    <p>Price: {currentEvent.eventPrice}kr</p>
                    <p>Host: {currentEvent.host?.hostName || 'Unknown host'}</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard