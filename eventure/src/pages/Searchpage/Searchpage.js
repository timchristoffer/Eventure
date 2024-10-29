import React, { useEffect, useState } from 'react';
import Searchbar from '../../components/SearchpageComponent/Searchbar';
import axios from "axios";
import EventCard from '../../components/EventCardComponent/EventCard';
import { Link } from 'react-router-dom';

const Searchpage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() =>{
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/events?populate=*`)
        console.log("Response data: ", response.data);
        setEvents(response.data.data);
        setFilteredEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events: ", error)
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) =>
        event.eventTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  };
  console.log({filteredEvents})
  return (
    <div>
      <h1>Searchpage</h1>
      <Searchbar onSearch={handleSearch}/>
      <div>
        {filteredEvents.map((event) => (
        <Link 
          to={`/event/${event.documentId}`}
          key={event.id}
        >
          <EventCard event={event} />
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Searchpage
