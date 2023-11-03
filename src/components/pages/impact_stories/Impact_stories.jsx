import "./impact_stories.css";
import Nav from "../../common/navbar/Nav";
import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import {
  stories1,
  stories2,
  stories3,
  stories4,
  stories5,
  stories6,
  stories7,
  sss,
} from "../../../assets/images/image";
// import { FaBuilding } from "react-icons/fa";
import PieChart from "../../common/piechart/PieChart";

function Impact_stories() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <Nav />
      </div>
      {/* navigation bar */}

      {/* body a start */}
      <div className="BodyA-container">
        {/* text field */}
        <div className="stories1-text">
          <h1>We are working cross country</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        {/* image */}
        <div className="stories1-container">
          <img src={stories1} alt="" className="stories-image" />
        </div>
      </div>
      {/* body a end */}

      {/* body B start */}
      <div className="BodyB">
        <div className="sub-body">
          <img src={stories2} alt="" className="stories-image" />
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            . Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.
          </p>
        </div>
        <div className="sub-body">
          <img src={stories3} alt="" className="stories-image" />
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            . Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.
          </p>
        </div>
      </div>
      {/* body B end */}

      {/* header */}
      <div>
        <Header
          text="We are creating a place  "
          sub="where Businesses can thrive and prosper"
        />
      </div>
      {/* header */}

      {/* body C start */}
      <div className="BodyC">
        <div className="story">
          <img src={stories4} alt="" className="overlay-image" />
          <div className="overlay-text">
            <h4>Mission smile 1k: Outdoor charity</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="story">
          <img src={stories5} alt="" className="overlay-image" />
          <div className="overlay-text">
            <h4>Mission smile 1k: Outdoor charity</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="story">
          <img src={stories6} alt="" className="overlay-image" />
          <div className="overlay-text">
            <h4>Mission smile 1k: Outdoor charity</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <button className="stories-btn">
          Discover more Impact <br /> Stories
        </button>
      </div>
      {/* body C end */}

      {/* body D start */}
      <div className="bodyD">
        <div className="sub1">
          <>
            {/* <h2>
              Some Services we <br /> Provide For Struggling <br /> Businesses
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p> */}
            <img src={sss} alt="" className="bodyD-texxt-container" />
          </>
          {/* <div>
            <div className="bodyD-sub-container">
              <div className="bodyD-icon">
                <FaBuilding/>
              </div>
              <div className="bodyD-sub-text">
                <h4>Entrepreneurship </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <img src={stories7} alt="" className="bodyD-image" />
        </div>
      </div>
      {/* body D  end */}

      {/* body E start */}
      <div className="bodyE">
        <div className="bodyE-text-container">
          <h2>How we spend your Funds on Individuals and Businesses </h2>
          <p>We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
        </div>
        <div className="chart">
          <PieChart />
        </div>
      </div>
      {/* body E end */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
}

export default Impact_stories;
