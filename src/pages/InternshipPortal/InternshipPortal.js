import React from 'react';
import "./InternshipPortal.css";

const cardData = [
  {
    category: 'Article',
    title: 'Lorem libero donec',
    content: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    authorName: 'John Smith',
    designation: 'Erat netus'
  },
  {
    category: 'Article',
    title: 'Lorem libero donec',
    content: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    authorName: 'John Smith',
    designation: 'Erat netus'
  },
  {
    category: 'Article',
    title: 'Lorem libero donec',
    content: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    authorName: 'John Smith',
    designation: 'Erat netus'
  }
  // Add more card data as needed
];

const InternshipPortal = () => {
  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Internship Portal</h2>
            <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          {cardData.map((card, index) => (
            <div className="col" key={index}>
              <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">{card.category}</span>
                <h4>{card.title}</h4>
                <p>{card.content}</p>
                <div className="d-flex">
                  <div>
                    <p className="fw-bold mb-0">{card.authorName}</p>
                    <p className="text-muted mb-0">{card.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InternshipPortal;