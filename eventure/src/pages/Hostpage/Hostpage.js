import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import EventCard from '../../components/EventCardComponent/EventCard';
import './Hostpage.css'

const Hostpage = () => {

  const [host, setHost] = useState(null)
  const { documentId } = useParams();

  console.log(documentId)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/hosts/${documentId}?populate=*`);
        console.log("Response data:", response.data);
        setHost(response.data.data);
      } catch (error) {
        console.error('Error fetching Host:', error);
        alert("Failed to fetch Host");
      }
    };
    
    getData();
  }, [documentId]);

  if (!host) {
    return <div className='loading-message'>Loading...</div>; 
  }

  console.log(host)
  console.log(documentId)
  

  const hostImg = host.hostAvatar[0]?.url 
  ? `http://localhost:1337/${host.hostAvatar[0].url}`
  : ''

  console.log(host)
  const events = host.events.map(event => 
      <div className='event-thumbnail'>
        <Link 
          to={`/event/${event.documentId}`}
          key={event.id}
        >
        <EventCard event={event} />
        </Link> 
      </div>
  )


  return (
    <div>
      <h2 className='host-title'>{host.hostName}</h2>
      <div className='host-container'>
          <div className='host-presentation'>
          {hostImg && <img 
            src={hostImg} 
            alt={host.hostName} 
            className='host-img' 
            onError={(e) => console.error('Image load error:', e)} 
          />}
          <p className='host-description'>{host.hostBio}</p>
          <br/>
        </div>
        <h3>Events hosted by {host.hostName}</h3>
        <div className='host-events'>
          {events}
        </div>
      </div>
    </div>
  )
}

export default Hostpage
