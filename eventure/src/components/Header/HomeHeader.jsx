import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeHeader.css';

const HomeHeader = () => {
  const [headerData, setHeaderData] = useState({
    headerImage: '',
    headerTitle: '',
    headerInfo: ''
  });

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/header?populate=*');
        console.log('API response:', response.data);

        console.log('Full Response:', response);

        if (response.data && response.data.data) {
          const header = response.data.data;
          console.log('Header:', header);

          const headerInfoHtml = header.headerInfo.map(block => {
            if (block.type === 'paragraph') {
              return block.children.map(child => child.text).join(' ');
            }
            return '';
          }).join(' ');

          setHeaderData({
            headerImage: header.headerImage?.url ? `http://localhost:1337${header.headerImage.url}` : '',
            headerTitle: header.headerTitle || 'Eventure',
            headerInfo: headerInfoHtml || "Let's go on an Eventure!"
          });
        } else {
          console.error('Header data is not in the expected format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };

    fetchHeaderData();
  }, []);

  return (
    <div className='headerContainer'>
      <div className='headerContent'>
        <div className='headerImage'>
          {headerData.headerImage && <img src={headerData.headerImage} alt='Header' />}
        </div>
        <div className='headerText'>
          <h1>{headerData.headerTitle}</h1>
          <p dangerouslySetInnerHTML={{ __html: headerData.headerInfo }} />
          <div className='headerButton'>
            <a href='/search'>Find Events</a>
            <a href='/about'>Host Events</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;