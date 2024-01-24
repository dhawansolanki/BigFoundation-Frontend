import "./alumniNetwork.css"

const AlumniNetwork = () => {
  const students_alumni_images=[
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
  ]
  const advisory_alumni_images=[
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
    {
        "url":"/alumni/students_alumni.png",
        "name":"john doe",
        "role":"student president",
    },
  ]
  return (
    <div className="alumni_network">
      <div className="alumni_section1">
        <div>
            <h1 style={{fontSize:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corporis.</h1>
            <p style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
            <img src="/alumni/random.png" alt="random" />
        </div>
      </div>
      <div className="alumni_about" style={{marginTop:"30px"}}>
        <div>
        <h1 style={{fontSize:"30px"}}>About</h1>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae soluta fugiat, architecto rem voluptatum repudiandae sint, neque amet cupiditate nostrum minus excepturi quo corrupti. Ducimus ab beatae eum dicta cumque ipsam? Corrupti, ipsum nam. Perferendis ducimus doloribus fugiat expedita repellendus officia, iure sequi id exercitationem facilis nemo! Omnis, rem ipsam?</p>
        </div>
      </div>
      {/* alumni photos */}
      <div className="alumni">
        <div>
        <h1 style={{fontSize:"35px",textDecoration:"underline",textUnderlineOffset:"4px"}}>Students Alumni</h1>
        </div>
        <div className="students_alumni">
            {
                students_alumni_images.map((student,index)=>(
                    <div key={index} className="student">
                        <img src={student.url} alt="" />
                        <h5>{student.name}</h5>
                        <p>{student.role}</p>
                    </div>
                ))
            }
        </div>
        <div className="alumni" style={{marginTop:"20px"}}>
            <div><h1 style={{fontSize:"35px",textDecoration:"underline",textUnderlineOffset:"4px"}}>Advisory Board</h1></div>
            <div className="advisory_alumni">
            {
                students_alumni_images.map((student,index)=>(
                    <div key={index} className="student">
                        <img src={student.url} alt="" />
                        <h5>{student.name}</h5>
                        <p>{student.role}</p>
                    </div>
                ))
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniNetwork
