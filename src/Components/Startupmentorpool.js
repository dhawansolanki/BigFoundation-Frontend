import React from 'react'
import '../utils/Startupmentorpool.css'
import Team from '../pages/Team/Team'
export default function Startupmentorpool() {
  return (
    <>
    <div className="Hero-section">
        <div className="title">
            <h1 style={{marginBottom: '10px', fontSize: '3.5em'}}>Startup Mentor Pool</h1>
        </div>
    <div className="info">
    <p style={{ marginTop: '0px', marginBottom: '20px' }}>
      Connect with seasoned industry professionals and boost your entrepreneurial journey!
      <br /><br />
      <div className="images">
        <img src="/media/feature/feature2.png" alt="Left Image" className="left-image" />
        <img src="/media/process/process1.png" alt="Right Image" className="right-image" />
      </div>
      <ul style={{listStyle: 'none', padding: '0'}}>

<li style={{backgroundColor: '#f0f0f0', padding: '10px', margin: '5px', borderRadius: '5px'}}>
  <strong>Personalised Guidance</strong>
</li>

<li style={{backgroundColor: '#f0f0f0', padding: '10px', margin: '5px', borderRadius: '5px'}}>
  <strong>Industry Insights</strong>
</li>

 <li style={{backgroundColor: '#f0f0f0', padding: '10px', margin: '5px', borderRadius: '5px'}}>
  <strong>Invaluable support</strong>
</li>

</ul>

      <br />
      Specially curated programs where mentors across various industries share their experience and expertise and guide you through your journey.
    </p>
    </div>
    <div className="buttons">
    <a href="#">
        <button type="button" className="btn btn-dark btn-lg btn-block" style={{ backgroundColor: 'rgb(32, 71, 221)', color: 'white' }}>
          Startup Application→
        </button>
      </a>
      <a href="#">
        <button type="button" className="btn btn-lg btn-block" style={{ backgroundColor: 'rgb(32, 71, 221)', color: 'white' }}>
          Mentor Application→
        </button>
      </a>
    </div>
    <div class="data">
<div class="reach row">
<div class="col">
<h3 class="reach-num" id="count1" style={{color: 'rgb(32, 71, 221)'}}>20+</h3>
<p class="reach-info">Student startups!</p>
</div>
<div class="col" style={{margin: '0px 100px'}}>
<h3 class="reach-num" id="count2" style={{color: 'rgb(32, 71, 221)'}}>
700+
</h3>
<p class="reach-info">Alumni Startups!</p>
</div>
<div class="col">
<h3 class="reach-num" id="count2" style={{color: 'rgb(32, 71, 221)'}}>15+</h3>
<p class="reach-info">Mentors!</p>
</div>
</div>
</div>
</div>
<div className="Mentors">
  <Team mainTitle='Meet the Mentors' midTitle='Mentors' endTitle='Featured Mentors'/>
</div>
</>
  )
}

