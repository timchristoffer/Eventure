import React, { useEffect, useState } from 'react';
import Searchbar from '../../components/SearchpageComponent/Searchbar';
import axios from "axios";
import EventCard from '../../components/EventCardComponent/EventCard';
import { Link } from 'react-router-dom';
import './Searchpage.css'

const Searchpage = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [allHosts, setAllHosts] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/events?populate=*`);
        setAllEvents(response.data.data);
        setFilteredEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };
    fetchEvents();
  }, []);

  const handleSearch = ({ searchText, minPrice, maxPrice, startDate, endDate, host, genre }) => {
    const results = allEvents.filter(event => {
      const matchText = event.eventTitle.toLowerCase().includes(searchText.toLowerCase()) ||
        event.eventVenue.toLowerCase().includes(searchText.toLowerCase());
      const matchPrice = event.eventPrice >= minPrice && event.eventPrice <= maxPrice;
  
      const eventDate = new Date(event.eventTime); 
      const matchStartDate = startDate ? eventDate >= new Date(startDate) : true;
      const matchEndDate = endDate ? eventDate <= new Date(endDate) : true;

      const matchHost = host ? event.host.hostName === host : true;

      const matchGenre = genre ? event.eventGenre === genre : true;
  
      return matchText && matchPrice && matchStartDate && matchEndDate && matchHost && matchGenre;
    });
  
    console.log("Filtered Results:", results);
    setFilteredEvents(results);
  };
  
  useEffect(() => {
    const uniqueHosts = [...new Set(allEvents.map(event => event.host.hostName))];
    setAllHosts(uniqueHosts);

    const uniqueGenres = [...new Set(allEvents.map(event => event.eventGenre))];
    setGenres(uniqueGenres);
  }, [allEvents]);

  return (
    <div className='Searchpage'>
      <h1 className='SearchpageTitle'>Searchpage</h1>
      <Searchbar className="Searchbar" onSearch={handleSearch} hosts={allHosts} genres={genres}/>
      <div className='EventCardsContainer'>
        {filteredEvents.map((event) => (
        <Link 
          to={`/event/${event.documentId}`}
          key={event.id}
          alt={`link to event: ${event.eventTitle}`}
        >
          <EventCard event={event} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Searchpage;