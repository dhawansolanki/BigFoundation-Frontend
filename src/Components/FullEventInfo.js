import React from 'react';
import { useParams } from 'react-router-dom';

const FullEventInfo = ({ events }) => {
  const { eventId } = useParams();
  const parsedEventId = parseInt(eventId);
  const event = events.find((e) => e.id === parsedEventId);
  
  if (!event) {
    return <div>Event not found</div>;
  }

  const formattedDetails = event.resourcePerson ? event.resourcePerson.replace(/\n/g, '<br>') : null;
  
  return (
    <>
    <div className="container">
    <h1 className="my-4 text-center">{event.title}<br/></h1>
    <div className="row">
        <div className="col-md-8"><img className="img-fluid" src={event.urlToImage} alt={event.title}/></div>
        <div className="col-md-4">
            <ul >
            {event.dateOfStart?(<h4 className="my-3">Date: </h4>):null}
              {event.dateOfStart && event.dateOfEnding ? (
                <li>{event.dateOfStart} to {event.dateOfEnding}</li>
              ) : (
                <li>{event.dateOfStart}</li>
              )}
            </ul>
            <h3 className="my-3">Event Description</h3>
            <p>{event.description}</p>
            <ul >

            {event.resourcePerson?( <h3 className="my-3">Resouce Person Details</h3>)
            :(null)}
            {event.resourcePerson?(
              <ul >
                  <li dangerouslySetInnerHTML={{ __html: formattedDetails }}></li>
              </ul>
            ):(null)}
            
            </ul>
        </div>
    </div>
   
</div>
</>
  );
};

export default FullEventInfo;
