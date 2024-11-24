import React, { useEffect, useState } from 'react';
import fetchData from '../../service/api/dataFetching';

import FooterLayouts from './FooterLayouts';
import AboutLayouts from './AboutLayouts';
import AboutMeLayouts from './AboutMeLayouts';
import CardGalleryLayouts from './CardGalleryLayouts';

const CardProjectLayouts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='loading'>Error: {error}</div>;
  }

  return (
    <div className="exp">
        <h2 className="h2"><em><u>Experience</u></em></h2>
        <div className="experience">
            {data.experience.map((item) => (
                <div className="content">
                    <div className="left">
                        <img src="./icon/calender.svg" alt="img" />
                        <p>{item.date}</p>
                    </div>
                    <div className="right">
                        <div className="title">
                            <h2>{item.title}</h2>
                            <img src="./icon/arrow.svg" alt="img" />
                        </div>
                        <div className="list">
                            <p className='role'>{item.role}</p>
                            <div className="card">
                                <p>{item.t1}</p>
                            </div>
                            <div className="card">
                                <p>{item.t2}</p>
                            </div>
                            <div className="card">
                                <p>{item.t3}</p>
                            </div>
                            <div className="card">
                                <p>{item.t4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <CardGalleryLayouts></CardGalleryLayouts>
        <AboutLayouts></AboutLayouts>
        <FooterLayouts></FooterLayouts>
    </div>
  );
};

export default CardProjectLayouts;
