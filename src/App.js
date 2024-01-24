import Home from './Components/Home';
import React ,{useState,useEffect} from 'react'
import Register from './pages/Register/Register'
// import Walkthrough from './pages/Walkthrough/Walkthrough'
import LaunchPad from './pages/LaunchPad/LaunchPad';
import Team  from './pages/Team/Team';
import {Routes,Route} from "react-router-dom"
import Contact from './pages/Contact/Contact.js'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Devwing from './pages/Devwing/Devwing';
import RegisterAlumini from './pages/Register1/RegisterAlumini.js';
import RegisterStudent from './pages/Register1/RegisterStudents.js';
import RegisterStartup from './pages/Register1/RegisterStartup.js';
import RegisterCompany from './pages/Register1/RegisterCompany.js';
import RegisterFaculty from './pages/Register1/RegisterFaculty.js';
import EventCard from './Components/EventCard';
import FullEventInfo from './Components/FullEventInfo';

import CampusExecutive from './pages/CampusExecutive.js/CampusExecutive.js';
import AlumniNetwork from './pages/AlumniNetwork/AlumniNetwork.js';
export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch events (${response.status} ${response.statusText})`);
        }
        return response.json();
      })
      .then((data) => setEvents(data.Events))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="App">

    
      <Header/>
        <Routes>

          <Route path='/' element={<Home/>} exact />
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/launchPad' element={<LaunchPad/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/RegisterStudent' element={<RegisterStudent/>}/>
          <Route path='/RegisterAlumini' element={<RegisterAlumini/>}/>
          <Route path='/RegisterStartup' element={<RegisterStartup/>}/>
          <Route path='/RegisterCompany' element={<RegisterCompany/>}/>
          <Route path='/RegisterFaculty' element={<RegisterFaculty/>}/>
            <Route path='/devWing' element={<Devwing/>}/>
          <Route path="/events" element={<div className='row'>
        {events.map((event) => {
                return <div className=" col-md-4">
                  <EventCard key={event.id} event={event} />
                </div>
              })}
      </div>} />
      <Route
        path="/events/:eventId"
        element={<FullEventInfo events={events} />}
      />
          <Route path='/alumni' element={<AlumniNetwork/>}/>
        </Routes>
  <Footer/>
    </div>

  )
}
