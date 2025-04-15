import React from "react";
import "./SectionFive.css"; // Import the CSS file for styling
import applelogos from "../../assets/images/icons/apple-tv-logo.png"
import tvshow from "../../assets/images/home/banker.png";
import watchmore from "../../assets/images/icons/watch-series5-logo.png";

const FifthSection = () => {
  return (
    <section className="fifth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          {/* Left Side Section */}
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={applelogos} alt="Apple TV" />
                </div>
              </div>

              <div className="tvshow-logo-wraper">
                <img src={tvshow} alt="Banker TV Show" />
              </div>

              <div className="watch-more-wrapper">
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>

          {/* Right Side Section */}
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img
                    src={watchmore}
                    alt="Apple Watch Series 5"
                  />
                </div>
              </div>
              <div className="description-wraper">
                With the Always-On Retina display.
                <br />
                You’ve never seen a watch like this.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
