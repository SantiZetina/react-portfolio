import React from "react";
import "../../styles/Home.css";
import myPicture from "../../images/my-picture.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import  TextTypist  from "react-text-typist";




export default function Home() {
    
  return (
    <div className="background">
      <div className="page-wrapper">
        <div className="container">
        <TextTypist
            className="header text-center mt-4"
            sentences={[
              "Santiago's Portfolio",
            ]}
            loop
            typingSpeed={50}
            deleteSpeed={150}
            pauseTime={5000}
          />
          <div className="about-me d-flex justify-content-center align-items-center mt-5">
            <img src={myPicture} alt="Profile" className="img-thumbnail me-5" />
            <p className="text-wrapper">
            Hi, my name is Santiago and I'm a web developer. I'm bilingual and fluent in both English and Spanish. Currently, I'm graduating from the Georgia Tech MERN bootcamp, where I gained hands-on experience in building full-stack web applications. Originally from Mexico, I moved to the US when I was 13, which has given me a unique perspective and appreciation for different cultures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
