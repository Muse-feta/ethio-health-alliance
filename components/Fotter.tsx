import React from 'react'

type Props = {}

const Fotter = (props: Props) => {
  return (
    <footer id="contact" className=" mt-14 mx-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="about footer-item">
              <div className="logo">
                <a href="#about">Ethio Health Alliance</a>
              </div>
              <a href="mailto:info@ethiohealthalliance.org">
                info@ethiohealthalliance.org
              </a>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094718091688"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ethio-health-alliance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ethiohealthalliance?igsh=MXVoMHg0aTg4dGtmZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/Ethiohealthalliance"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Telegram"
                  >
                    <i className="fa fa-paper-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="services footer-item">
              <h4>Info</h4>
              <ul>
                <li>
                  <a href="#about">What We Do</a>
                </li>
                <li>
                  <a href="#about">Parteners</a>
                </li>
                <li>
                  <a href="#">EHA Structure</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="community footer-item">
              <h4>Departement</h4>
              <ul>
                <li>
                  <a href="#departments">SRH</a>
                </li>
                <li>
                  <a href="#departments">Mental Health</a>
                </li>
                <li>
                  <a href="#departments">NCD</a>
                </li>
                <li>
                  <a href="#departments">Nutrition</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="subscribe-newsletters footer-item">
              <h4>Ethio Health Alliance</h4>
              <p>
                Join us as we continue to write our story, one health initiative
                at a time. Together, we’re turning dedication into action and
                vision into reality.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="copyright">
              <p>
                Copyright © 2024 Ethio Health Aliance., All Rights Reserved.
                <br />
                Developed by{" "}
                <a
                  rel="nofollow"
                  href="tel:+251985322632"
                  title="Call SynYod Digital Solution"
                >
                  SynYod Digital Solution
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fotter