import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';
const EventCard = ({ event }) => {
  return (
    <div  className="card">
      <div  className="img-cover">
        <img style={{height:'250px'}} alt={event.title} src={event.urlToImage} />
        <div className="icon">
          <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5" stroke="black" stroke-width="3" />
          </svg>
        </div>
      </div>
      <div className="desc">
        <h3>{event.title}</h3>
        <span>{event.description.slice(0, 80)}...</span>
        <Link to={`/events/${event.id}`}>
          <button style={{color:'white',width:'200px' ,}} className=" text-white font-bold rounded xmas">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
