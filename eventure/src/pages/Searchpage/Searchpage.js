import React, { useEffect, useState } from 'react';
import Searchbar from '../../components/SearchpageComponent/Searchbar';
import axios from "axios";
import EventCard from '../../components/EventCardComponent/EventCard';

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
  
  return (
    <div>
      <h1>Searchpage</h1>
      <Searchbar onSearch={handleSearch}/>
      <div>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event}/>
        ))}
      </div>
    </div>
  )
}

export default Searchpage
