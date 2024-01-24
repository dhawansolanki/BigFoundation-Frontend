import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    
      <div>
        <div className="card" style={{ margin: '15px', padding: '10px', textAlign: 'center' }}>
          <img src={event.urlToImage} className="card-img-top" alt={event.title} />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text" >{event.description.slice(0, 80)}...</p>
            <Link to={`/events/${event.id}`}>
              <button className="btn-dark">View Details</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default EventCard;
