import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
      <div id="services" className="our-services section">
    <div className="services-right-dec">
      {/* <img src="assets/images/services-right-dec.png" alt=""/> */}
    </div>
    <div className="container">
      <div className="services-left-dec">
        {/* <img src="assets/images/services-left-dec.png" alt=""/> */}
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>We <em>Provide</em> The Best Service With <span>Our Tools</span></h2>
            <span>Our Services</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-carousel owl-services">
            <div className="item">
              <h4>Learn More about our Guidelines</h4>
              <div className="icon"><img src="assets/images/service-icon-01.png" alt=""/></div>
              <p>Feel free to use this template for your business</p>
            </div>
            <div className="item">
              <h4>Develop The Best Strategy for Business</h4>
              <div className="icon"><img src="assets/images/service-icon-02.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            <div className="item">
              <h4>UI / UX Design and Development</h4>
              <div className="icon"><img src="assets/images/service-icon-03.png" alt=""/></div>
              <p>Get to know more about the topic in details</p>
            </div>
            <div className="item">
              <h4>Discover &amp; Explore our SEO Tips</h4>
              <div className="icon"></div>
              <p>Feel free to use this template for your business</p>
            </div>
            <div className="item">
              <h4>Optimizing your websites for Speed</h4>
              <div className="icon"></div>
              <p>Get to know more about the topic in details</p>
            </div>
            <div className="item">
              <h4>See The Strategy In The Market</h4>
              <div className="icon"></div>
              <p>Get to know more about the topic in details</p>
            </div>
            <div className="item">
              <h4>Best Content Ideas for your pages</h4>
              <div className="icon"></div>
              <p>Feel free to use this template for your business</p>
            </div>
            <div className="item">
              <h4>Optimizing Speed for your web pages</h4>
              <div className="icon"></div>
              <p>Get to know more about the topic in details</p>
            </div>
            <div className="item">
              <h4>Accessibility for mobile viewing</h4>
              <div className="icon"></div>
              <p>Get to know more about the topic in details</p>
            </div>
            <div className="item">
              <h4>Content Ideas for your next project</h4>
              <div className="icon"></div>
              <p>Feel free to use this template for your business</p>
            </div>
            <div className="item">
              <h4>UI &amp; UX Design &amp; Development</h4>
              <div className="icon"></div>
              <p>Get to know more about the topic in details</p>
            </div>
            <div className="item">
              <h4>Discover the digital marketing trend</h4>
              <div className="icon"></div>
              <p>Get to know more about the topic in details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services