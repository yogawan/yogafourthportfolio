import React, { useEffect, useState } from 'react';
import fetchData from '../../service/api/dataFetching';

import FooterLayouts from './FooterLayouts';

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

  const sortedData = data.project.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div>
        <div className="project">
            {sortedData.map((item) => (
                <div className="content">
                    <img src={item.img} alt="img" />
                    <div className="title">
                        <h2>{item.title}</h2>
                        <img src="./arrow.svg" alt="" />
                    </div>
                    <p className='description'>{item.description}</p>
                    <hr />
                    <p className='type'>{item.type}</p>
                    <div className="tech">
                        <p>{item.t1}</p>
                        <p>{item.t2}</p>
                        <p>{item.t3}</p>
                        <p>{item.t4}</p>
                    </div>
                    <div className="time">
                      <img src="./icon/time.svg" alt="Time Icon" />
                      <p>{new Date(item.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}</p>
                    </div>
                    <li>
                        {/* <img src="./link.svg" alt="img" /> */}
                        <a href={item.link}>Go to Project</a>
                    </li>
                </div>
            ))}
        </div>
        <FooterLayouts></FooterLayouts>
    </div>
  );
};

export default CardProjectLayouts;
