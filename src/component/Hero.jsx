import React from "react";
import "../style/hero.css";
import Footer from "./Footer";
import Slider from "./Slider";
const Hero = () => {
  return (
    <>
      <div className="hero-sec">
        <h2>
          Welcome to the BCS <br /> Student Voice!
        </h2>
        <p>Student-inspired and managed news for Baker Charter Schools.</p>
      </div>
      <div className="student-mng">
        <span>Student managed.</span>
        <span>Student run.</span>
        <span>Student Inspired.</span>
      </div>
      <div className="who-we-are">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 m-0 p-0">
              <div className="left"></div>
            </div>
            <div className=" col-lg-6 col-md-6 col-12 m-0 p-0">
              <div className="right">
                <h2>Who Are We?</h2>
                <p>
                  The BCS Student Voice is an online newspaper for Baker Charter
                  Schools run by a team of creative BWA and BEC students. We are
                  dedicated to strengthening the BCS community, so you will
                  often find us bleary-eyed and hunched over our computer
                  screens for days at a time (just kidding).
                </p>
                <div className="button">
                  <a href="/#">More Info!</a>
                  <a href="/#">Email Us!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="student-voice">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="sv-left col-lg-4 col-md-4 col-12">
              <img
                src="https://static.wixstatic.com/media/844f7a_b755dc54701141f9a3e346b1ce7468ba~mv2.gif"
                alt="student voice"
              />
            </div>
            <div className=" sv-right col-lg-8 col-md-8 col-12">
              <h3>
                Every young person should be able to voice their opinions about
                the world.
              </h3>
              <p>That's what the BCS Student Voice is for.</p>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <div className="get-your">
        <h2>
          Get your <span>creative</span> side on.
        </h2>
        <p>Get involved with the BCS Student Voice!</p>
        <div className="button">
          <a href="/#">Students</a>
          <a href="/#">Parents and Staff</a>
        </div>
      </div>
      <div className="qoute">
        <h2>Inspirational Quote</h2>
        <span></span>
        <p>
          "Do what you do. Do what <br /> makes you unique. Do what <br /> makes
          you happy"
        </p>
        <p>~ Seán William McLoughlin</p>
      </div>
      <div className="blank"></div>
      <Footer />
    </>
  );
};

export default Hero;
