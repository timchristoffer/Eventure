import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import HostCard from '../../components/HostCardComponent/HostCard';
import './AllHostspage.css'

const AllHostspage = () => {

  const [hosts, setHosts] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/hosts?populate=*`);
        console.log("Response data:", response.data);
        setHosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Hosts:', error);
        alert("Failed to fetch Hosts");
      }
    };
    
    getData();
  }, []);

  if (!hosts) {
    return <div className='loading-message'>Loading...</div>; 
  }

  console.log(hosts)

  const currentHosts = hosts.map((host) => (
    <div key={host.id}>
        <Link 
            to={`/host/${host.documentId}`}
            key={host.id}
            >
            <HostCard host={host} />
        </Link>
    </div>
  ))  

  return (
    <div className="allHosts-page">
        <h2>Hosts</h2>
        <div className='allHosts-container'>
        {currentHosts}
        </div>
    </div>
  )
}

export default AllHostspage
