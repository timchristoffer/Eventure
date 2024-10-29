import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeroSlider.css';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/events?populate=*');
        console.log('API response:', response.data);
        const allEvents = response.data.data;
        console.log('All Events:', allEvents);
        allEvents.forEach(event => {
          console.log('Event:', event);
          console.log('Event Attributes:', event);
        });
        const featuredEvents = allEvents.filter(event => event.eventFeatured);
        
        setEvents(featuredEvents);
      } catch (error) {
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
        <div className='heroTitle'>
        <h2>Popular Events</h2>
        <a href='/search'>More Events</a>
        </div>
      <div className='heroList'>
        {events.map(event => {
          console.log('Event:', event);
          const imageUrl = event.eventPicture?.url 
            ? `http://localhost:1337${event.eventPicture.url}` 
            : '';
          console.log('Image URL:', imageUrl);
          return (
            <div className='heroItem' key={event.id}>
              <Link 
                to={`/event/${event.documentId}`}
                key={event.id}
              >
              {imageUrl && <img src={imageUrl} className='heroImg' alt={event.eventTitle} onError={(e) => console.error('Image load error:', e)} />}
              <div className="heroInfo">
                <h3>{event.eventTitle}</h3>
                <p>
                  {Array.isArray(event.eventDescription) 
                    ? event.eventDescription.map((block, index) => (
                        <span key={index}>{block.text}</span>
                      ))
                    : event.eventDescription}
                </p>
                <p>{new Date(event.eventTime).toLocaleString()}</p>
                <p>{event.eventVenue}</p>
                <p>{event.eventPrice}kr</p>
                <p>{event.eventGenre}</p>
              </div>
            </Link>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSlider;