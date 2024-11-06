import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUsHeader = () => {
  const [aboutData, setAboutData] = useState({
    aboutUsHeader: '',
    eventureAboutUsDescription: [],
    aboutUsHeadline1: '',
    eventureAboutUsDescription2: [],
    aboutUsHeadline2: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/about');
        const data = response.data.data;

        if (data) {
          setAboutData({
            aboutUsHeader: data.aboutUsHeader,
            aboutUsHeadline1: data.aboutUsHeadline1,
            eventureAboutUsDescription: data.eventureAboutUsDescription || [],
            aboutUsHeadline2: data.aboutUsHeadline2,
            eventureAboutUsDescription2: data.eventureAboutUsDescription2 || [],
          });
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const extractText = (descriptionArray) => {
    return descriptionArray.map((item) => {
      if (item.children && item.children.length > 0) {
        return item.children.map((child) => child.text).join('');
      }
      return '';
    }).join(' ');
  };

  const isDescriptionEmpty =
    aboutData.eventureAboutUsDescription.length === 0 &&
    aboutData.eventureAboutUsDescription2.length === 0;

  return (
    <div className="aboutUsLeftContent column">
      <h1 className="aboutUsHeader">{aboutData.aboutUsHeader}</h1>
      <h2>{aboutData.aboutUsHeadline1}</h2>
      <p>
        {aboutData.eventureAboutUsDescription.length > 0 ? (
          extractText(aboutData.eventureAboutUsDescription)
        ) : null}
      </p>
      <h2>{aboutData.aboutUsHeadline2}</h2>
      <p>
        {aboutData.eventureAboutUsDescription2.length > 0 ? (
          extractText(aboutData.eventureAboutUsDescription2)
        ) : null}
      </p>

      {isDescriptionEmpty && <span>No description available</span>}
    </div>
  );
};

export default AboutUsHeader;
