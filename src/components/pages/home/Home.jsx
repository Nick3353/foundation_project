import "./home.css";
import { banner, overview } from "../../../assets/images/image";
import Navbar from "../../common/navbar/Nav";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Btn from "../../common/btn/Btn";
import React from "react";

function Home() {
  return (
    <div className="">
      {/* Banner Starts Here */}
      <img src={banner} alt="banner" id="bannerimg" />
      <div className="banner">
        <Navbar />
        <h1>
          Empowering People, <br /> Building Futures, Changing Lives
        </h1>
        <div className="btn">
          <Btn text=" Learn More" />
        </div>
      </div>
      {/* Banner Ends Here */}

      {/* Body A Starts Here */}
      <div className="BodyA">
        <div className="content">
          <img src={overview} alt="overview" className="image" />
          <div className="sub-container">
            <h2>Overview</h2>
            <p>
              ia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est.. Neque porro quisquam. Nemo
              enim ipsam voluptatemm quia vNemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              quia voluptas sit aspernatur aut odit ia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est.. Neque porro quisquam. Nemo enim ipsam voluptatemm
              quia vNemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur quia voluptas sit aspernatur
              aut odit ia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est.. Neque porro quisquam.
              Nemo enim ipsam voluptatemm quia vNemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit,sed quia consequuntur
              quia voluptas sit aspernatur aut odit
            </p>
          </div>
        </div>
        <p>
          ia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est.. Neque porro quisquam. Nemo enim
          ipsam voluptatemm quia vNemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit,sed quia consequuntur quia voluptas sit
          aspernatur aut odit ia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Nequeporro quisquam est.. Neque porro
          quisquam. Nemo enim ipsam voluptatemm quia vNemo enim ipsam voluptatem
          quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          quia voluptas sit aspernatur aut odit{" "}
        </p>
      </div>

      <div className="btn">
        <Btn text="Volunteer " />
      </div>
      {/* Body A Ends Here */}

      {/* Header starts here */}

      <div className="Header">
        <Header text=" People &" sub=" Business We Aim To Empower." />
      </div>
      {/* Header ends here */}

      {/* Footer Starts Here */}
      <div>
        <Footer />
      </div>
      {/* Footer Ends Here */}
    </div>
  );
}

export default Home;
