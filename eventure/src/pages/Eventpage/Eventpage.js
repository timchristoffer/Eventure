import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Eventpage.css'



const Eventpage = () => {

  const [event, setEvent] =  useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/events/umvlxfololdqd3np1nmsqcpg?populate=*`);
        console.log("Response data:", response.data);
        setEvent(response.data.data);
      } catch (error) {
        console.error('Error fetching Event:', error);
        // alert("Failed to fetch Event");
      }
    };
    
    getData();
  }, []);

  console.log(event)

  if (!event) {
    return <div>Loading...</div>; // Visa en laddningsskärm medan event-datan hämtas
  }

  const eventImg = event.eventPicture?.url 
  ? `http://localhost:1337${event.eventPicture.url}`
  : ''

  const description = event.eventDescription.map((paragraph) => (
      paragraph.children.map((child) => (
        child.text
      ))))
  
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
      <h1>Eventpage</h1>
      <h1 className='event-title'>{event.eventTitle}</h1>
      <div className='event-container'>
        {eventImg && <img 
          src={eventImg} 
          alt={event.eventTitle} 
          className='event-img' 
          onError={(e) => console.error('Image load error:', e)} 
        />}
        <p className='event-description'>{description}</p>
        <div className='event-info'>
          <p><b>Datum: </b>{readableEventTime}</p>
          <p><b>Plats: </b>{event.eventVenue}</p>
          <p><b>Pris från:  </b>{event.eventPrice} kr</p>

        </div>
      </div>
    </div>
  )
}

export default Eventpage
