import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import './Eventpage.css'

const Eventpage = () => {

  const [event, setEvent] = useState(null)
  const { documentId } = useParams();

  console.log(documentId)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/events/${documentId}?populate=*`);
        console.log("Response data:", response.data);
        setEvent(response.data.data);
      } catch (error) {
        console.error('Error fetching Event:', error);
        alert("Failed to fetch Event");
      }
    };
    
    getData();
  }, [documentId]);

  console.log(event)
  console.log(documentId)
  if (!event) {
    return <div className='loading-message'>Loading...</div>; 
  }

  const eventImg = event.eventPicture?.url 
  ? `http://localhost:1337/${event.eventPicture.url}`
  : ''

  const description = event.eventDescription.map((paragraph) =>
    paragraph.children.map((child, index) => (
      <p key={index}>
        {child.bold && child.italic ? (
          <strong><em>{child.text}</em></strong>
        ) : child.bold ? (
          <strong>{child.text}</strong>
        ) : child.italic ? (
          <em>{child.text}</em>
        ) : (
          child.text
        )}
      </p>
    ))
  );
  
  const eventDateTime = new Date(event.eventTime)
  const readableEventTime = eventDateTime.toLocaleString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      <h2 className='event-title'>{event.eventTitle}</h2>
      <div className='event-container'>
          <div className='event-presentation'>
          {eventImg && <img 
            src={eventImg} 
            alt={event.eventTitle} 
            className='event-img' 
            onError={(e) => console.error('Image load error:', e)} 
          />}
          
          <p className='event-description'>{description}</p>
        </div>
        <div className='event-info'>
          <p><b>Tidpunkt: </b>{readableEventTime}</p>
          <p><b>Plats: </b>{event.eventVenue}</p>
          <p><b>Pris från: </b>{event.eventPrice} kr</p>
          <p><b>Värd:  </b>
            <Link 
            to={`/host/${event.host.documentId}`}
            key={event.host.id}
            >
              {event.host.hostName}
          </Link></p>
        </div>
      </div>
    </div>
  )
}

export default Eventpage