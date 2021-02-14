import React from "react";

const Sponsors = () => (
  <section id="sponsors" className="sponsors">
    <div className="container">
      <h2 className="sponsors__title">2021 Sponsors</h2>
      {/* Drift */}
      <div className="row">
        <div className="col-md-4"></div>
        <a
          href="https://www.drift.com/"
          className="col-md-4 sponsors__logo-wrapper mx-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/drift.png"
            alt="Drift logo"
          />
        </a> 
      </div>
      
      {/* PowerAdvocate and Upstatement */}
      <div className="row">
        <a
          href="https://w3.poweradvocate.com/"
          className="col-md-5 sponsors__logo-wrapper mx-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/poweradvocate.png"
            alt="Power Advocate logo"
          />
        </a>
        <a
          href="https://upstatement.com/"
          className="col-md-5 sponsors__logo-wrapper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/upstatement.png"
            alt="Upstatement logo"
          />
        </a>
      </div>

      {/* Facebook and Khoury */}
      <div className="row">
        <div className="col-md-2"></div>
        <a
          href="https://www.facebook.com/"
          className="col-md-3 sponsors__logo-wrapper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/facebook_2133px.png"
            alt="Facebook logo"
          />
        </a>
        <a
          href="https://www.khoury.northeastern.edu/"
          className="col-md-6 sponsors__logo-wrapper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/khoury_1304px.png"
            alt="Khoury logo"
          />
        </a>
      </div>
      
      {/* In-Kind Sponsors */}
      <h2 className="sponsors__subtitle">In-Kind Sponsors</h2>
      <div className="row">
        <div className="col-md-1"></div>
        <a
          href="https://www.badabeansnacks.com/"
          className="col sponsors__logo-wrapper my-sm-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/badabeanbadaboom_1500px.png"
            alt="Bada Bean Bada Boom logo"
          />
        </a>
        <a
          href="https://www.joinglimpse.com/"
          className="col sponsors__logo-wrapper my-sm-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/glimpse.png"
            alt="Glimpse logo"
          />
        </a>
        <a
          href="https://www.zipperhq.com/"
          className="col sponsors__logo-wrapper my-sm-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/zipperHQ.png"
            alt="ZipperHQ logo"
          />
        </a>
        <div className="col-md-1"></div>
      </div>
    </div>
  </section>
);
export default Sponsors;

