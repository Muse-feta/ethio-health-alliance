import React from 'react'
import Image from 'next/image'  
import img1 from "@/assets/images/customAbout2.jpg";

type Props = {}

const About = (props: Props) => {
  return (
    <div id="" className="mx-8">
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-image">
                <Image
                  className="img-fluid"
                  src={img1}
                  alt="about image"
                  width={500}
                  height={800}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>
                  Building Healthy society <em>and,</em> {" "}
                  <span>Empowering Health professionals </span> and students
                </h2>
                <p>
                  Join us as we continue to write our story, one health
                  initiative at a time. Together, we’re turning dedication into
                  action and vision into reality.
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon"></div>
                        <div className="count-digit">100+</div>
                        <div className="count-title">Members</div>
                        <p>
                          Join over 100 passionate members dedicated to
                          transforming community health.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon"></div>
                        <div className="count-digit">250+ </div>
                        <div className="count-title">Volunteers</div>
                        <p>
                          Over 250 dedicated volunteers driving impactful health
                          initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon"></div>
                        <div className="count-digit">15+</div>
                        <div className="count-title">projects</div>
                        <p>
                          Leading 15+ projects for community health and
                          well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About