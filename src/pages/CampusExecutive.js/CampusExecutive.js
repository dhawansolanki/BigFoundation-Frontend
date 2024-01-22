import React from 'react'
import "./CampusExecutive.css"
const CampusExecutive = () => {
  return (
    <div>
    <body>
    <figure className="figure"></figure>
    <div id="carousel-1" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
            <div className="carousel-item active"></div>
            <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" /></div>
            <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" /></div>
        </div>
        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></a></div>
        <div className="carousel-indicators"><button className="active" type="button" data-bs-target="#carousel-1" data-bs-slide-to="0"></button><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button></div>
    </div>
    <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                <div style={{maxWidth: "350px"}}>
                    <h2 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h2>
                    <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-xl-5 m-xl-5"><img className="rounded img-fluid w-100 fit-cover" style={{minHeight: "300px"}} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
            </div>
        </div>
    </div>
    <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
            <div className="col-md-6">
                <div className="p-xl-5 m-xl-5"><img className="rounded img-fluid w-100 fit-cover" style={{minHeight: "300px"}} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
            </div>
            <div className="col-md-6 d-md-flex align-items-md-center">
                <div style={{maxWidth: "350px"}}>
                    <h2 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h2>
                    <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                </div>
            </div>
        </div>
    </div>
    <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-2 row-cols-md-4">
            <div className="col">
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
                        </svg></div>
                    <div className="px-3">
                        <h2 className="fw-bold mb-0">123+</h2>
                        <p className="mb-0">Erat netus</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className="bi bi-bezier" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                            <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                        </svg></div>
                    <div className="px-3">
                        <h2 className="fw-bold mb-0">45+</h2>
                        <p className="mb-0">Erat netus</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className="bi bi-cup" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9ZM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"></path>
                        </svg></div>
                    <div className="px-3">
                        <h2 className="fw-bold mb-0">67+</h2>
                        <p className="mb-0">Erat netus</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg"><svg className="bi bi-cart2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                        </svg></div>
                    <div className="px-3">
                        <h2 className="fw-bold mb-0">89</h2>
                        <p className="mb-0">Erat netus</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container py-4 py-xl-5">
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Heading</h2>
                <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
            </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg"><svg className="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
                        </svg></div>
                    <div className="px-3">
                        <h4>Title</h4>
                        <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Learn More <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                            </svg></a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg"><svg className="bi bi-bezier" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                            <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                        </svg></div>
                    <div className="px-3">
                        <h4>Title</h4>
                        <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Learn More <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                            </svg></a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg"><svg className="bi bi-flag" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"></path>
                        </svg></div>
                    <div className="px-3">
                        <h4>Title</h4>
                        <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Learn More <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                            </svg></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                <div style={{maxWidth: "350px"}}>
                    <h2 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h2>
                    <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-xl-5 m-xl-5"><img className="rounded img-fluid w-100 fit-cover" style={{minHeight: "300px"}} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
            </div>
        </div>
    </div>
    <div className="container py-4 py-xl-5">
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Testimonials</h2>
            </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
            <div className="col">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="text-center">Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus.</p>
                    <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                        <div>
                            <p className="fw-bold text-primary mb-0">John Smith</p>
                            <p className="text-muted mb-0">Erat netus</p>
                        </div>
                    </div>
                    <div className="card border-0 shadow-none">
                        <div className="card-body d-flex align-items-center p-0"></div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="text-center">Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus.</p>
                    <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                        <div>
                            <p className="fw-bold text-primary mb-0">John Smith</p>
                            <p className="text-muted mb-0">Erat netus</p>
                        </div>
                    </div>
                    <div className="card border-0 shadow-none">
                        <div className="card-body d-flex align-items-center p-0"></div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="text-center">Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus.</p>
                    <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                        <div>
                            <p className="fw-bold text-primary mb-0">John Smith</p>
                            <p className="text-muted mb-0">Erat netus</p>
                        </div>
                    </div>
                    <div className="card border-0 shadow-none">
                        <div className="card-body d-flex align-items-center p-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default CampusExecutive
