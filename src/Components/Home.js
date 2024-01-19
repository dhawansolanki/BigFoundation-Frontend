import React from 'react'
import Carousel from './Carousel'
export default function Home() {
  return (
    <div>

    {/* <div id="preloader" className="tlp-preloader">
        <div className="animation-preloader">
            <div className="tlp-spinner"></div>
            <img src="media/bmsce.png" alt="Preloader"/>
        </div>
    </div> */}

    <div id="wrapper" className="wrapper">
        <a href="#main_content" data-type="section-switch" className="return-to-top">
            <i className="fas fa-angle-double-up"></i>
        </a>

        <div id="main_content">
            {/* <section className="main-banner-wrap-layout1 bg-gradient-layout1 has-animation">
                <ul className="animated-figure">
                    <li>
                        <div className="translate-left-75 opacity-animation transition-200 transition-delay-10">
                            <svg width="678px" height="575px">
					<defs>
						<linearGradient id="shape-gradient1" x1="0%" x2="50%" y1="86.603%" y2="0%">
						  	<stop offset="0%" stopColor="rgb(82,63,255)" stopOpacity="0.21" />
								<stop offset="100%" stopColor="rgb(104,2,198)" stopOpacity="0.21" />
						</linearGradient>
					</defs>
					<path fill="url(#shape-gradient1)"
					 d="M8.774,72.637 C24.335,32.328 64.598,1.818 107.846,0.977 C153.529,0.088 193.846,29.308 228.367,59.201 C262.888,89.095 297.864,122.295 342.435,132.337 C395.990,144.404 451.255,120.277 506.077,123.221 C581.185,127.255 647.967,185.940 669.010,258.060 C690.054,330.177 668.236,411.294 619.856,468.811 C571.474,526.325 499.170,561.071 424.701,571.631 C341.448,583.438 251.586,564.649 188.145,509.531 C153.304,479.260 128.229,437.550 117.609,392.681 C109.183,357.083 116.362,318.069 105.755,283.272 C94.490,246.320 59.108,232.772 35.167,205.579 C3.816,169.968 -8.566,117.557 8.774,72.637 Z"/>
				</svg>
                        </div>
                    </li>
                    <li>
                        <div className="translate-right-75 opacity-animation transition-200 transition-delay-500">
                            <svg width="478px" height="406px">
					<defs>
						<linearGradient id="shape-gradient2" x1="0%" x2="50%" y1="86.603%" y2="0%">
						  	<stop offset="0%" stopColor="rgb(82,63,255)" stopOpacity="0.21" />
								<stop offset="100%" stopColor="rgb(141,34,240)" stopOpacity="0.21" />
						</linearGradient>
					</defs>
					<path fill="url(#shape-gradient2)"
					 d="M57.512,28.844 C41.937,43.215 29.659,61.585 21.596,80.726 C10.238,107.690 5.415,136.934 2.113,166.013 C-8.559,260.013 20.528,368.419 121.400,397.331 C189.062,416.723 262.433,396.867 324.343,368.126 C415.304,325.900 543.497,194.454 436.347,96.738 C378.745,44.207 285.697,64.026 217.602,35.418 C185.699,22.011 155.662,-2.674 119.276,0.267 C95.545,2.187 74.555,13.118 57.512,28.844 Z"/>
				</svg>
                        </div>
                    </li>
                </ul>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="translate-right-75 opacity-animation transition-150 transition-delay-2600">
                                <div className="main-banner-box-layout1">
                                    <div className="item-figure">
                                        <img src="media/illustration/illustration1.png" alt="Illustration"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-1 compress-left-side d-flex align-items-center">
                            <div className="main-banner-box-layout1">
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1500">
                                    <h2>
                                        <div className="item-sub-title"><b>-WE are CIIE BMSCE-</b></div>
                                    </h2>
                                    <div className="item-sub-title"><b>-Centre for Innovation Incubation and Enterpreneurship-</b></div>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1800">
                                    <h1 className="item-main-title">Your Successful Entrepreneurial Journey Begins Here</h1>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2100">
                                    <p><b>--Turning your VISION into VALUE--</b></p>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2400">
                                    <div className="banner-btns">
                                        <a href="register.html" className="item-btn btn-ghost btn-light">Join Us</a>
                                        <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=xf34GCMVAoY">
                                            <div className="item-icon"><i className="fas fa-play"></i></div>
                                            <span>Watch Video</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div>
                <Carousel />
            </div>
            <div className="padding" style={{padding: '50px'}}></div>
            <section className="about-wrap-layout3 has-animation">
                <div className="animated-shape">
                    <ul>
                        <li>
                            <div className="translate-right-75 opacity-animation transition-200 transition-delay-500">
                                <img src="media/element/element11.png" alt="Animated Figure"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-6 col-lg-5 col-12 pl-0 pr-0">
                            <div className="about-box-layout3">
                                <ul className="figure-holder has-animation">
                                    <li className="animated-bg">
                                        <div className="translate-left-75 opacity-animation transition-200 transition-delay-10">
                                            <svg width="1011px" height="793px">
									<path fillRule="evenodd"  fill="rgb(248, 247, 254)"
								 	d="M265.339,499.191 C290.475,564.630 152.429,680.677 258.786,767.767 C357.678,848.744 440.244,712.358 565.072,670.825 C628.377,649.761 702.991,694.926 784.442,667.876 C1013.233,591.893 1073.837,334.328 942.926,182.770 C795.118,11.649 578.741,19.692 480.823,86.161 C369.882,161.472 302.205,41.329 252.768,14.176 C131.855,-52.233 -45.913,128.863 10.910,264.359 C75.208,417.683 211.867,359.981 265.339,499.191 Z"/>
								</svg>
                                        </div>
                                    </li>
                                    <li className="animated-figure">
                                        <div className="translate-left-75 opacity-animation transition-200 transition-delay-500">
                                            <div className="mask-image">
                                                <img src="about_1.png" alt="About"/>
                                                {/* <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=xf34GCMVAoY">
                                                    <div className="item-icon"><i className="fas fa-play"></i></div>
                                                </a> */}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-12 compress-right-side">
                            <div className="about-box-layout3">
                                <div className="item-content">
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1000">
                                        <div className="sub-title">About Us</div>
                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1500">
                                        <h2 className="item-title">Innovating Futures: Cultivating Entrepreneurship and Multidisciplinary Innovation</h2>
                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2000">
                                        <p>Our mission at BIG FOUNDATION is to cultivate a vibrant ecosystem of entrepreneurship 
                                        and multidisciplinary innovation. We are dedicated to supporting the growth and success of 
                                        entrepreneurs through comprehensive incubation, research, and consultancy. Our approach 
                                        bridges technology, creativity, and business acumen, transforming visionary ideas into valuable, 
                                        real-world solutions. </p>
                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500">
                                        <a href="about.html" className="btn-fill btn-gradient">Discover More<i className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-wrap-layout1 section-padding-md bg-color-light position-relative">
                <div className="container">
                    <div className="section-heading heading-dark heading-layout1 has-animation">

                        <div className="heading-icon">
                            <svg className="dash-left" width="100" height="20">
	<g fill="none" strokeWidth="4">
		<path className="dashed1" stroke="rgba(90, 73, 248, 0.5)" strokeDasharray="5, 5" d="M5 20 l215 0" />
		<path className="dashed2" stroke="white" strokeDasharray="5, 5" d="M5 20 l215 0" />
	</g>
</svg>
                            <i className="flaticon-rocket"></i>
                            <svg className="dash-right" width="100" height="20">
	<g fill="none" strokeWidth="4">
		<path className="dashed1" stroke="rgba(90, 73, 248, 0.5)" strokeDasharray="5, 5" d="M5 20 l215 0" />
		<path className="dashed2" stroke="white" strokeDasharray="5, 5" d="M5 20 l215 0" />
	</g>
</svg>


                        </div>
                        <p className="heading-paragraph"></p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-6 col-12 order-xl-2 pl-0 pr-0">
                            <div className="process-box-layout1">
                                <ul className="figure-holder">
                                    <li className="animated-bg">
                                        <svg width="993px" height="698px">
								<path fillRule="evenodd"  opacity="0.502" fill="rgb(240, 246, 254)"
							 	d="M615.878,633.346 C421.616,682.785 207.128,731.954 63.989,573.875 C-94.294,399.069 67.235,87.796 264.299,20.945 C414.319,-29.945 599.731,16.820 724.612,108.132 C826.171,182.390 906.437,307.315 953.564,424.057 C964.863,452.047 974.424,490.636 972.447,520.765 C970.471,550.894 1010.875,682.567 983.375,694.964 C943.433,712.968 842.741,645.666 801.432,631.106 C744.184,610.931 681.174,616.728 615.878,633.346 Z"/>
							</svg>
                                    </li>
                                    <li className="animated-figure">
                                        <img src="media/process/process1.png" alt="Process"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12 order-xl-1 compress-left-side has-animation">
                            <div className="process-box-layout1">
                                <ul className="content-holder">
                                    <li>
                                        <div className="translate-right-75 transition-150 opacity-animation transition-delay-100">
                                            <div className="d-flex align-items-sm-center">
                                                <div className="item-icon dodger-blue">
                                                <img src="about_2.png" alt="About" style={{ borderRadius: '100px' }} />
                                                    <i className="flaticon-list"></i>
                                                </div>
                                                <div className="item-content">
                                                    <h3 className="item-title">Vision</h3>
                                                    <p>Create products, technologies or processes to address societal needs.</p>
                                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500">
                                                        <a href="innovate.html" className="btn-fill btn-gradient">Discover More<i className="flaticon-next"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <svg x="0px" y="0px" width="312px" height="130px">
								<path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" strokeWidth="1" strokeDasharray="1300" strokeDashoffset="0" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"/>
								<path className="dashed2" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6" strokeDashoffset="1300" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "/>
							</svg>
                                    </li>
                                    <li>
                                        <div className="translate-left-75 transition-150 opacity-animation transition-delay-1000">
                                            <div className="d-flex align-items-sm-center flex-xl-row-reverse">
                                                <div className="item-icon sunset-orange">
                                                <img src="about_3.png" alt="About" style={{ borderRadius: '100px' }} />
                                                    <i className="flaticon-research"></i>
                                                </div>
                                                <div className="item-content">
                                                    <h3 className="item-title">Mission </h3>
                                                    <p>To create an ecosystem to nurture innovation and entrepreneurship through incubation support, 
                                                    and facilitation of technology transfer for commercialization by a multidisciplinary approach</p>
                                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500">
                                                        <a href="incubate.html" className="btn-fill btn-gradient">Discover More<i className="flaticon-next"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <svg x="0px" y="0px" width="312px" height="130px">
								<path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" strokeWidth="1" strokeDasharray="1300" strokeDashoffset="0" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"/>
								<path className="dashed2" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6" strokeDashoffset="1300" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"/>
							</svg>
                                    </li>
                                    <li>
                                        <div className="translate-right-75 transition-150 opacity-animation transition-delay-2000">
                                            <div className="d-flex align-items-sm-center">
                                                <div className="item-icon california">
                                                <img src="about_5.png" alt="About" style={{ borderRadius: '100px' }} />
                                                    <i className="flaticon-list"></i>
                                                </div>
                                                <div className="item-content">
                                                    <h3 className="item-title">Objectives</h3>
                                                    <p>Be the platform for innovation, incubation, research, consultancy and entrepreneurship. 
                                                    To promote “Work Integrated Learning Programs” across disciplines to fortify the culture 
                                                    of work-life balance amongst students.</p>
                                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500">
                                                        <a href="inspire.html" className="btn-fill btn-gradient">Discover More<i className="flaticon-next"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-wrap-layout1 section-padding-md bg-color-accent2 position-relative">
                <div className="animated-shape">
                    <ul>
                        {/* <li>
                            <svg data-parallax='{"x" : 150, "y" : -300}' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="638px" height="514px">
					<path  opacity="0.051" fill="rgb(255, 197, 4)" d="M256.191,-0.004 C397.682,-0.004 406.514,181.938 525.597,258.321 C824.664,450.156 454.262,521.730 256.191,512.195 C114.864,505.394 -0.000,397.537 -0.000,256.095 C-0.000,114.655 114.701,-0.004 256.191,-0.004 Z"/>
				</svg>
                        </li>
                        <li>
                            <svg data-parallax='{"x" : -200, "y" : 400}' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="567px" height="492px">
					<path  opacity="0.031" fill="rgb(122, 100, 242)" d="M546.544,185.562 C513.626,116.380 454.941,60.016 385.431,26.835 C152.316,-84.442 -53.840,176.649 12.833,396.877 C24.369,434.980 46.437,474.094 84.066,487.084 C126.302,501.662 172.028,478.324 207.184,450.761 C242.341,423.198 275.543,389.558 318.953,379.003 C391.625,361.333 463.113,408.069 526.986,349.876 C577.576,303.789 573.685,242.605 546.544,185.562 Z"/>
				</svg>
                        </li> */}
                    </ul>
                </div>
                <div className="container">
                    <div className="section-heading heading-dark heading-layout1 has-animation">
                        <h2 className="heading-main-title" id="facilities">FACILITIES</h2>
                        <div className="heading-icon">
                            <svg className="dash-left" width="100" height="20">
	<g fill="none" strokeWidth="4">
		<path className="dashed1" stroke="rgba(90, 73, 248, 0.5)" strokeDasharray="5, 5" d="M5 20 l215 0" />
		<path className="dashed2" stroke="white" strokeDasharray="5, 5" d="M5 20 l215 0" />
	</g>
</svg>
                            <i className="flaticon-rocket"></i>
                            <svg className="dash-right" width="100" height="20">
	<g fill="none" strokeWidth="4">
		<path className="dashed1" stroke="rgba(90, 73, 248, 0.5)" strokeDasharray="5, 5" d="M5 20 l215 0" />
		<path className="dashed2" stroke="white" strokeDasharray="5, 5" d="M5 20 l215 0" />
	</g>
</svg>


                        </div>
                        <p className="heading-paragraph">Learn more about our facilities</p>
                    </div>
                    <div className="row masonry-items">
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-california">
                                        <div className="item-icon icon-color-california">
                                            <i className="flaticon-pen"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="80px"> */}
								{/* <path d="M95.798,66.493 C95.402,67.238 94.989,67.934 94.568,68.608 C92.140,72.492 89.322,75.200 86.228,76.996 C75.718,83.098 62.044,78.694 49.794,74.183 C30.107,66.931 13.369,52.019 4.629,32.917 C0.428,23.737 -1.365,11.491 6.138,4.714 C11.356,0.001 19.072,-0.185 26.172,0.068 C26.493,0.079 26.814,0.090 27.132,0.103 C31.363,0.275 35.595,0.448 39.826,0.620 C45.043,0.833 50.261,1.045 55.479,1.256 C57.205,1.327 58.931,1.397 60.658,1.467 C67.392,1.740 74.374,2.077 80.361,5.160 C89.583,9.908 94.528,20.156 97.310,30.121 C97.438,30.578 97.561,31.039 97.682,31.500 C100.721,43.123 101.423,55.927 95.798,66.493 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Consulting Services</a></h3>
                                    <p>Expert guidance in business strategy, market analysis, and operational optimization</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-300">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-emerald">
                                        <div className="item-icon icon-color-emerald">
                                            <i className="flaticon-user-experience"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105px" height="80px">
								<path d="M104.768,46.596 C103.512,53.499 97.269,58.301 91.117,61.679 C77.841,68.967 63.002,72.833 48.310,76.516 C40.421,78.492 32.367,80.451 24.252,79.893 C23.977,79.874 23.702,79.851 23.426,79.826 C15.577,79.094 7.660,75.615 3.385,69.025 C0.518,64.605 -0.391,59.254 0.154,53.978 C0.481,50.815 1.330,47.677 2.594,44.784 C4.373,40.709 6.870,37.034 9.730,33.620 C12.289,30.568 15.138,27.725 18.038,25.002 C24.140,19.273 30.567,13.891 37.279,8.890 C41.647,5.637 46.299,2.342 51.494,0.551 C56.951,-1.331 61.008,1.926 65.771,4.608 C72.267,8.264 78.490,12.408 84.374,16.984 C86.832,18.895 89.229,20.884 91.564,22.945 C92.385,23.670 93.201,24.402 94.006,25.145 C96.362,27.319 98.710,29.770 100.630,32.428 C103.718,36.705 105.691,41.522 104.768,46.596 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Financial Aid</a></h3>
                                    <p> Accessible funding options to fuel entrepreneurial ventures and innovation
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-royal-blue">
                                        <div className="item-icon icon-color-royal-blue">
                                            <i className="flaticon-login"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="119px" height="80px">
								<path d="M118.988,32.868 C118.954,33.798 118.867,34.713 118.740,35.616 C117.289,45.963 109.998,54.513 102.246,60.696 C100.672,61.950 99.062,63.147 97.419,64.283 C85.885,72.259 72.742,77.274 59.279,78.981 C53.104,79.765 44.685,81.169 38.854,78.104 C32.784,74.915 27.054,69.136 21.255,65.231 C15.037,61.044 8.845,56.391 4.621,49.782 C0.397,43.173 -1.534,34.183 1.434,26.764 C2.652,23.719 4.595,21.166 6.927,19.084 C9.080,17.161 11.562,15.641 14.122,14.520 C16.812,13.341 19.604,12.537 22.432,11.873 C25.211,11.221 28.024,10.704 30.810,10.101 C32.737,9.685 34.655,9.223 36.569,8.737 C45.702,6.418 54.720,3.489 63.942,1.669 C75.098,-0.533 86.824,-1.043 97.533,3.095 C103.301,5.324 108.727,8.943 112.734,14.101 C114.004,15.737 115.121,17.535 116.049,19.444 C118.047,23.560 119.159,28.199 118.988,32.868 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Legal Support </a></h3>
                                    <p> Comprehensive legal assistance for intellectual property, contracts, and compliance
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-dodger-blue">
                                        <div className="item-icon icon-color-dodger-blue">
                                            <i className="flaticon-innovation"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="116px" height="81px">
								<path d="M109.211,58.119 C103.645,68.260 94.581,77.680 82.450,80.249 C73.546,82.134 64.269,80.109 55.400,78.092 C51.907,77.297 48.414,76.503 44.921,75.708 C40.378,74.674 35.835,73.641 31.291,72.607 C25.787,71.354 20.142,70.045 15.508,67.066 C9.647,63.297 8.873,57.835 6.412,52.231 C4.771,48.495 2.992,44.886 1.723,41.136 C0.784,38.357 0.123,35.500 0.013,32.453 C-0.185,27.013 1.715,21.246 5.539,17.213 C7.301,15.355 9.470,13.864 12.033,12.944 C22.467,9.200 34.071,16.001 45.211,14.807 C57.088,13.532 65.756,3.598 77.302,0.763 C89.987,-2.353 103.658,4.415 110.574,14.666 C111.487,16.019 112.287,17.429 112.946,18.888 C113.554,20.235 114.060,21.606 114.479,22.994 C115.652,26.875 116.114,30.898 115.979,34.945 C115.712,42.910 113.146,50.950 109.211,58.119 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Lab and Research Equipment</a></h3>
                                    <p> State-of-the-art laboratories and tools for cutting-edge scientific exploration</p>
                                    <br/> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-300">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-sunset-orange">
                                        <div className="item-icon icon-color-sunset-orange">
                                            <i className="flaticon-design"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="111px" height="79px">
								<path d="M104.291,51.828 C98.019,60.839 88.939,65.934 79.675,69.589 C78.703,69.973 77.729,70.339 76.756,70.695 C70.214,73.079 63.555,75.012 56.818,76.487 C52.170,77.504 46.185,79.782 41.377,78.729 C35.709,77.491 29.573,72.385 24.073,66.622 C19.930,62.282 16.148,57.570 13.202,53.858 C9.879,49.670 6.733,45.085 4.332,40.057 C2.705,36.648 1.416,33.039 0.660,29.205 C0.495,28.369 0.363,27.520 0.260,26.664 C-0.809,17.814 1.431,8.213 7.280,3.434 C12.395,-0.743 19.166,-0.569 25.289,1.096 C31.411,2.760 37.332,5.756 43.525,6.802 C50.958,8.057 58.411,6.451 65.704,4.762 C72.997,3.075 80.398,1.296 87.854,2.211 C88.123,2.244 88.392,2.289 88.661,2.332 C95.524,3.379 102.448,7.076 106.734,13.861 C106.943,14.192 107.153,14.521 107.349,14.867 C113.666,26.001 111.221,41.873 104.291,51.828 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Translation and Transformation</a></h3>
                                    <p>Bridging ideas into market-ready products through specialized adaptation services</p> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-turquoise">
                                        <div className="item-icon icon-color-turquoise">
                                            <i className="flaticon-dashboard"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112px" height="81px">
								<path d="M94.170,75.633 C89.320,80.748 82.081,83.923 75.335,81.794 C69.399,79.922 65.020,74.470 59.599,71.197 C51.098,66.064 40.914,66.687 31.305,66.427 C27.387,66.323 23.278,65.938 19.374,64.964 C15.436,63.982 11.710,62.398 8.596,59.896 C7.227,58.797 5.976,57.524 4.879,56.041 C3.059,53.582 1.896,50.791 1.293,47.862 C-0.404,39.611 2.385,30.251 7.785,24.023 C13.919,16.948 22.510,13.058 31.345,10.292 C33.050,9.757 34.764,9.266 36.470,8.800 C39.687,7.924 42.924,7.120 46.176,6.383 C57.811,3.738 69.652,1.969 81.586,1.107 C82.278,1.057 82.974,1.011 83.672,0.974 C87.959,0.740 92.319,0.840 96.367,2.483 C105.518,6.200 110.819,17.150 111.330,27.451 C112.127,43.538 104.736,64.487 94.170,75.633 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Mentorship Programs</a></h3>
                                    <p>Personalized guidance from industry experts to navigate business challenges</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-turquoise">
                                        <div className="item-icon icon-color-turquoise">
                                            <i className="flaticon-dashboard"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112px" height="81px">
								<path d="M94.170,75.633 C89.320,80.748 82.081,83.923 75.335,81.794 C69.399,79.922 65.020,74.470 59.599,71.197 C51.098,66.064 40.914,66.687 31.305,66.427 C27.387,66.323 23.278,65.938 19.374,64.964 C15.436,63.982 11.710,62.398 8.596,59.896 C7.227,58.797 5.976,57.524 4.879,56.041 C3.059,53.582 1.896,50.791 1.293,47.862 C-0.404,39.611 2.385,30.251 7.785,24.023 C13.919,16.948 22.510,13.058 31.345,10.292 C33.050,9.757 34.764,9.266 36.470,8.800 C39.687,7.924 42.924,7.120 46.176,6.383 C57.811,3.738 69.652,1.969 81.586,1.107 C82.278,1.057 82.974,1.011 83.672,0.974 C87.959,0.740 92.319,0.840 96.367,2.483 C105.518,6.200 110.819,17.150 111.330,27.451 C112.127,43.538 104.736,64.487 94.170,75.633 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Co-working Spaces</a></h3>
                                    <p>Collaborative environments fostering creativity and synergy among entrepreneurs
                                    </p> <br/> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-turquoise">
                                        <div className="item-icon icon-color-turquoise">
                                            <i className="flaticon-dashboard"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112px" height="81px">
								<path d="M94.170,75.633 C89.320,80.748 82.081,83.923 75.335,81.794 C69.399,79.922 65.020,74.470 59.599,71.197 C51.098,66.064 40.914,66.687 31.305,66.427 C27.387,66.323 23.278,65.938 19.374,64.964 C15.436,63.982 11.710,62.398 8.596,59.896 C7.227,58.797 5.976,57.524 4.879,56.041 C3.059,53.582 1.896,50.791 1.293,47.862 C-0.404,39.611 2.385,30.251 7.785,24.023 C13.919,16.948 22.510,13.058 31.345,10.292 C33.050,9.757 34.764,9.266 36.470,8.800 C39.687,7.924 42.924,7.120 46.176,6.383 C57.811,3.738 69.652,1.969 81.586,1.107 C82.278,1.057 82.974,1.011 83.672,0.974 C87.959,0.740 92.319,0.840 96.367,2.483 C105.518,6.200 110.819,17.150 111.330,27.451 C112.127,43.538 104.736,64.487 94.170,75.633 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Funding Pitch Preparation</a></h3>
                                    <p>Coaching to effectively present ideas to investors and stakeholders
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                <div className="service-box-layout1">
                                    <div className="icon-holder icon-bg-turquoise">
                                        <div className="item-icon icon-color-turquoise">
                                            <i className="flaticon-dashboard"></i>
                                        </div>
                                        {/* <svg className="icon-bg-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112px" height="81px">
								<path d="M94.170,75.633 C89.320,80.748 82.081,83.923 75.335,81.794 C69.399,79.922 65.020,74.470 59.599,71.197 C51.098,66.064 40.914,66.687 31.305,66.427 C27.387,66.323 23.278,65.938 19.374,64.964 C15.436,63.982 11.710,62.398 8.596,59.896 C7.227,58.797 5.976,57.524 4.879,56.041 C3.059,53.582 1.896,50.791 1.293,47.862 C-0.404,39.611 2.385,30.251 7.785,24.023 C13.919,16.948 22.510,13.058 31.345,10.292 C33.050,9.757 34.764,9.266 36.470,8.800 C39.687,7.924 42.924,7.120 46.176,6.383 C57.811,3.738 69.652,1.969 81.586,1.107 C82.278,1.057 82.974,1.011 83.672,0.974 C87.959,0.740 92.319,0.840 96.367,2.483 C105.518,6.200 110.819,17.150 111.330,27.451 C112.127,43.538 104.736,64.487 94.170,75.633 Z"/>
							</svg> */}
                                    </div>
                                    <h3 className="item-title"><a href="service-details.html">Product Development Support</a></h3>
                                    <p> Assistance in design, prototyping, and refining innovative products
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="process-wrap-layout2 section-padding-md bg-gradient-layout2 position-relative">
                <div className="container">
                    <div className="section-heading heading-light heading-layout1">
                        <div className="heading-sub-title">WORK FLOW</div>
                        <h2 className="heading-main-title" id="walkthrough">Walkthrough</h2>

                    </div>
                    <div className="row gutters-80 has-animation">
                        <div className="col-xl-4 col-md-6 col-12">
                            <a href="innovate.html">
                                <div className="translate-zoomout-50 opacity-animation transition-100 transition-delay-100">
                                    <div className="process-box-layout2">
                                        <div className="count-number">1</div>
                                        <div className="item-content">
                                            <div className="item-icon california">
                                                <i className="flaticon-research-1"></i>
                                            </div>
                                            <h3 className="item-title">Innovate</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                            <a href="incubate.html">
                                <div className="translate-zoomout-50 opacity-animation transition-100 transition-delay-400">
                                    <div className="process-box-layout2">
                                        <div className="count-number">2</div>
                                        <div className="item-content">
                                            <div className="item-icon emerald">
                                                <i className="flaticon-think-1"></i>
                                            </div>
                                            <h3 className="item-title">Incubate</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                            <a href="inspire.html">
                                <div className="translate-zoomout-50 opacity-animation transition-100 transition-delay-700">
                                    <div className="process-box-layout2">
                                        <div className="count-number">3</div>
                                        <div className="item-content">
                                            <div className="item-icon royal-blue">
                                                <i className="flaticon-growth"></i>
                                            </div>
                                            <h3 className="item-title">Inspire</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>

                    </div>
                </div>
            </section>
            <section className="feature-wrap-layout1">
                <div className="container">
                    <div className="row gutters-50">


                        <div className="col-12 order-lg-1 d-lg-flex align-items-center justify-content-center has-animation d-none">
                            <div className="indicator-wrap">
                                <svg className="dash-left" width="675" height="206">
						<g fill="none" strokeWidth="2">
							<path className="dashed1" stroke="rgba(17, 17, 17, 0.3)" strokeDasharray="6, 6" strokeLinecap="butt" strokeLinejoin="miter" d="M3.000,0.995 L3.000,100.997 L673.000,101.994 L673.000,207.995" />
							<path className="dashed2" stroke="white" strokeDasharray="6, 6" strokeLinecap="butt" strokeLinejoin="miter" d="M3.000,0.995 L3.000,100.997 L673.000,101.994 L673.000,207.995" />
						</g>
					</svg>
                                <div className="indicator-img-right">
                                    <div className="translate-top-50 opacity-animation transition-100 transition-delay-2500">
                                        <img src="media/element/element2.png" alt="element"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-3 order-3 col-12 has-animation">
                            <div className="feature-box-layout1">
                                <div className="translate-right-75 opacity-animation transition-150 transition-delay-50">
                                    <img src="media/feature/feature2.png" alt="Feature"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 col-12 order-2 d-flex align-items-center justify-content-center has-animation">
                            <div className="feature-box-layout1">
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                    <h3 className="item-title">Are you still figuring out an Idea?</h3>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                    <p>Become a Volunteer and work closely with others who are working on ideas. You may have a game-changing idea when you surround yourself with people who are constantly talking about new ideas.
                                    </p>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500">
                                    <a href="register.html" className="btn-fill btn-gradient">Volunteer Now<i className="flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 has-animation">
                            <div className="feature-box-layout1">
                                <div className="translate-left-75 opacity-animation transition-150 transition-delay-100">
                                    <img src="media/feature/feature3.png" alt="Feature"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center has-animation">
                            <div className="feature-box-layout1">
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                    <h3 className="item-title">What are You Waiting For?</h3>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                    <p>Turn your vision into value by Joining Us today</p>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-900">
                                    <ul className="list-layout2">
                                        <li>Register with us with your idea and we will help you transform - Become an Innovator</li>
                                        <li>Take your next big step with your startup- Become an Incubatee
                                        </li>
                                        <li>We are constantly looking for mentors who can inspire our Innovators and Incubates</li>
                                        <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500">
                                            <a href="register.html" className="btn-fill btn-gradient">Register Now<i className="flaticon-next"></i></a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding-md bg-color-light position-relative">
                <div className="container">
                    <div className="section-heading heading-dark heading-layout1 has-animation">
                        <h2 className="heading-main-title" id="events">Latest Events</h2>
                        <div className="heading-icon">
                            <svg className="dash-left" width="100" height="20">
	<g fill="none" strokeWidth="4">
		<path className="dashed1" stroke="rgba(90, 73, 248, 0.5)" strokeDasharray="5, 5" d="M5 20 l215 0" />
		<path className="dashed2" stroke="white" strokeDasharray="5, 5" d="M5 20 l215 0" />
	</g>
</svg>
                            <i className="flaticon-rocket"></i>
                            <svg className="dash-right" width="100" height="20">
	<g fill="none" strokeWidth="4">
		<path className="dashed1" stroke="rgba(90, 73, 248, 0.5)" strokeDasharray="5, 5" d="M5 20 l215 0" />
		<path className="dashed2" stroke="white" strokeDasharray="5, 5" d="M5 20 l215 0" />
	</g>
</svg>


                        </div>
                        <p className="heading-paragraph"></p>
                    </div>
                    <div className="row has-animation">
                        <div className="col-lg-4 col-12">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                <div className="blog-box-layout1">
                                    <div className="item-figure">
                                        <a href="blog-details.html"><img src="media/blog/blog1.jpg" alt="Blog Figure"/></a>
                                    </div>
                                    <div className="item-content">
                                        <ul className="mb--5 entry-meta meta-color-accent justify-content-between">
                                            <li><a href="#"><i className="far fa-calendar-alt"></i>August 15, 2021</a></li>
                                        </ul>
                                        <h3 className="entry-title title-color-dark"><a href="./buildinindia">Build In India Virtual Conference - The Launch Event</a></h3>
                                        <ul className="entry-meta meta-color-accent justify-content-between meta-divider-center meta-wrap-border-top">
                                            <li><a href="#"><i className="far fa-user"></i>By CIIE BMSCE & BMSCE Alumni Club</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-300">
                                <div className="blog-box-layout1">
                                    <div className="item-figure">
                                        <a href="#"><img src="media/blog/blog2.jpg" alt="Blog Figure"/></a>
                                    </div>
                                    <div className="item-content">
                                        <ul className="mb--5 entry-meta meta-color-accent justify-content-between">
                                            <li><a href="#"><i className="far fa-calendar-alt"></i>Coming Soon</a></li>
                                        </ul>
                                        <h3 className="entry-title title-color-dark"><a href="blog-details.html">Coming Soon</a></h3>
                                        <ul className="entry-meta meta-color-accent justify-content-between meta-divider-center meta-wrap-border-top">
                                            <li><a href="#"><i className="far fa-user"></i>Coming Soon</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                                <div className="blog-box-layout1">
                                    <div className="item-figure">
                                        <a href="blog-details.html"><img src="media/blog/blog3.jpg" alt="Blog Figure"/></a>
                                    </div>
                                    <div className="item-content">
                                        <ul className="mb--5 entry-meta meta-color-accent justify-content-between">
                                            <li><a href="#"><i className="far fa-calendar-alt"></i>Coming Soon</a></li>
                                        </ul>
                                        <h3 className="entry-title title-color-dark"><a href="blog-details.html">Coming Soon</a></h3>
                                        <ul className="entry-meta meta-color-accent justify-content-between meta-divider-center meta-wrap-border-top">
                                            <li><a href="#"><i className="far fa-user"></i>Coming Soon</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="brand-wrap-layout1" className="brand-wrap-layout1 bg-color-accent2">
                <div className="container">
                    <div className="rc-carousel ">
                        <div className="brand-box-layout1 "><img src="media/brand/brand1.png" alt="Brand-thumb"/></div>
                        <div className="brand-box-layout1"><img src="media/brand/brand2.png" alt="Brand-thumb"/></div>
                        <div className="brand-box-layout1"><img src="media/brand/brand3.png" alt="Brand-thumb"/></div>
                        <div className="brand-box-layout1"><img src="media/brand/brand4.png" alt="Brand-thumb"/></div>
                        <div className="brand-box-layout1"><img src="media/brand/brand5.png" alt="Brand-thumb"/></div>


                    </div>
                </div>
            </section>
            <div id="template-search" className="template-search">
                <button type="button" className="close">×</button>
                <form className="search-form">
                    <input type="search" placeholder="Type here........" />
                    <button type="submit" className="search-btn">
			<i className="flaticon-search"></i>
		</button>
                </form>
            </div>
            <div className="offcanvas-menu-wrap" id="offcanvas-wrap" data-position="left">
                <div className="close-btn offcanvas-close"><i className="fas fa-times"></i></div>
                <div className="offcanvas-content">
                    <div className="offcanvas-logo">
                        <a href="index.html"><img src="media/logo.png" alt="logo"/></a>
                    </div>
                    <nav>
                        <ul className="offcanvas-nav">
                            <li className="nav-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="service-layout1.html">Service</a>
                            </li>
                            <li className="nav-item">
                                <a href="gallery-grid-2-column.html">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="team.html">Team</a>
                            </li>
                            <li className="nav-item">
                                <a href="blog-grid.html">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="offcanvas-footer">
                        <div className="item-title">Follow Me</div>
                        <ul className="offcanvas-social">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fas fa-rss"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    </div>
</div>
  )
}

