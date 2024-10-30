import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeroSlider.css';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

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
        setVisibleEvents(featuredEvents.slice(0, 6)); // Show first 6 events initially
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(prevIndex => {
          const newIndex = (prevIndex + 1) % events.length;
          const newEvent = events[newIndex];
          const newVisibleEvents = [...visibleEvents];

          if (!newVisibleEvents.some(event => event.id === newEvent.id)) {
            newVisibleEvents.shift();
            newVisibleEvents.push({ ...newEvent, uniqueId: Date.now() });
          }

          setVisibleEvents(newVisibleEvents);
          setFade(false);
          return newIndex;
        });
      }, 500); // Duration of fade out transition
    }, 5000); // Change one event every 5 seconds

    return () => clearInterval(interval);
  }, [events, visibleEvents]);

  return (
    <div className='heroContainer'>
      <div className='heroTitle'>
        <h2>Popular Events</h2>
        <a href='/search'>More Events</a>
      </div>
      <div className={`heroList ${fade ? 'fade-out' : 'fade-in'}`}>
        {visibleEvents.map(event => {
          console.log('Event:', event);
          const imageUrl = event.eventPicture?.url 
            ? `http://localhost:1337${event.eventPicture.url}` 
            : '';
          console.log('Image URL:', imageUrl);
          return (
            <div className={`heroItem ${fade ? 'fade-out' : 'fade-in'}`} key={event.uniqueId}>
              <Link 
                to={`/event/${event.documentId}`}
                key={event.uniqueId}
                alt={`link to event: ${event.eventTitle}`}
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
                {/* <p>{new Date(event.eventTime).toLocaleString()}</p>
                <p>{event.eventVenue}</p>
                <p>{event.eventPrice}kr</p>
                <p>{event.eventGenre}</p> */}
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