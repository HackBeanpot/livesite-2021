import React from "react";

const Sponsors = () => (
  <section id="sponsors" className="sponsors">
    <div className="container py-5">
      <h1>2021 Sponsors</h1>

      {/* Drift */}
      <div className="row">
        <div className="col-md-4"></div>
        <Logo
          href="https://www.drift.com/"
          className="col-md-4 sponsors__logo-wrapper mx-4"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/drift.png"
          alt="Drift logo"
        />
      </div>

      {/* PowerAdvocate and Upstatement */}
      <div className="row">
        <Logo
          href="https://w3.poweradvocate.com/"
          className="col-md-5 sponsors__logo-wrapper mx-5"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/poweradvocate.png"
          alt="Power Advocate logo"
        />
        <Logo
          href="https://upstatement.com/"
          className="col-md-5 sponsors__logo-wrapper"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/upstatement.png"
          alt="Upstatement logo"
        />
      </div>

      {/* Facebook and Khoury */}
      <div className="row">
        <div className="col-md-2"></div>
        <Logo
          href="https://www.facebook.com/"
          className="col-md-3 sponsors__logo-wrapper"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/facebook_2133px.png"
          alt="Facebook logo"
        />
        <Logo
          href="https://www.khoury.northeastern.edu/"
          className="col-md-6 sponsors__logo-wrapper"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/khoury_1304px.png"
          alt="Khoury logo"
        />
      </div>

      {/* In-Kind Sponsors */}
      <h2 className="text-center pt-5">In-Kind Sponsors</h2>

      <div className="row">
        <div className="col-md-1"></div>
        <Logo
          href="https://www.badabeansnacks.com/"
          className="col sponsors__logo-wrapper my-sm-3"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/badabeanbadaboom_1500px.png"
          alt="Bada Bean Bada Boom logo"
        />
        <Logo
          href="https://www.joinglimpse.com/"
          className="col sponsors__logo-wrapper my-sm-3"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/glimpse.png"
          alt="Glimpse logo"
        />
        <Logo
          href="https://www.zipperhq.com/"
          className="col sponsors__logo-wrapper my-sm-3"
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/zipperHQ.png"
          alt="ZipperHQ logo"
        />

        <div className="col-md-1"></div>
      </div>
    </div>
  </section>
);
export default Sponsors;

const Logo = ({ href, className, src, alt }) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="sponsors__logo" src={src} alt={alt} />
    </a>
  );
};
