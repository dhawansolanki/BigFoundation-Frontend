import { useNavigate } from "react-router-dom";
import "../utils/latestEvents.css";
const LatestEvents = () => {
    const navigate = useNavigate();
  const events = [
    {
      img: "/media/blog/blog2.jpg",
      date: "January 17,2022",
      title: "BMSCE Bootcamp 2022 Startup Accelerator Program",
      organizedBy: "By CIIE BMSCE & BMSCE Alumni Club",
    },
    {
      img: "/media/blog/blog3.jpg",
      date: "January 19th and 20th",
      title: "Idea Summit",
      organizedBy: "By CIIE BMSCE & BMSCE Alumni Club",
    },
    {
      img: "/media/blog/blog1.jpg",
      date: "January 17,2022",
      title: "StartUp Launchpad - Cohort - 2",
      organizedBy: "By CIIE BMSCE & BMSCE Alumni Club",
    },
  ];
  return (
    <section className="section-padding-md bg-color-light position-relative latestEvents">
      <div className="container">
        <div className="section-heading heading-dark heading-layout1 has-animation">
          <h2 className="heading-main-title" id="events">
            Latest Events
          </h2>
          <div className="heading-icon">
            <svg className="dash-left" width="100" height="20">
              <g fill="none" strokeWidth="4">
                <path
                  className="dashed1"
                  stroke="rgba(90, 73, 248, 0.5)"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
                <path
                  className="dashed2"
                  stroke="white"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
              </g>
            </svg>
            <i className="flaticon-rocket"></i>
            <svg className="dash-right" width="100" height="20">
              <g fill="none" strokeWidth="4">
                <path
                  className="dashed1"
                  stroke="rgba(90, 73, 248, 0.5)"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
                <path
                  className="dashed2"
                  stroke="white"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {events.map((event, index) => (
              <div className="col-12 col-sm-8 col-md-6 col-lg-4" key={event.img}>
                <div className="card cart-body" style={{ border: "none" }}>
                  <div className="card-body" style={{height:"520px"}}>
                    <img
                      className="card-img-bottom"
                      src={event.img}
                      alt="Bologna"
                    />
                    <div style={{cursor:"pointer"}}>
                      <p className="mt-3">{event.date}</p>
                      <h4 className="card-title mt-4 fw-bolder" style={{letterSpacing:"0.2px"}}>{event.title}</h4>
                      <p className="card-text">{event.organizedBy}</p>
                      <a href="/" className="card-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <button className="btn btn-info" onClick={()=>{navigate("/events")}}>Load More <span style={{fontWeight:"bolder"}}>. . .</span></button>
    </section>
  );
};

export default LatestEvents;
