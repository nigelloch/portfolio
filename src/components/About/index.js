import React from 'react'
import coverImage from "../../assets/cover/Nigel.jpg"


function About() {

  return (
    <section className="my-5 about-container"  >
    <div >
      <h1 id="about">Who is Nigel?</h1>
      <img src={coverImage} id= "myprofileimage" className="my-2" style={{ height: "auto", width: "65%" }} alt="cover" />
    </div>
      <div id="about-text" className="my-2">
        <p>
          My name is Nigel Loch. I am a Full Stack Web Developer nearing completion of the Full Stack
          Coding Bootcamp at The University of Texas. I am also currently employed at ExxonMobil as a Business
          Analyst with the Geospatial Team. I have a strong background in Database Management, Reporting, and 
          Software Testing. I enjoy the creative side of development and am one who appreciates clean and elegant
          code. Please keep checking back on me as I have many projects in the works and will be keeping my project 
          list up to date! 
         </p>

      </div>
    </section>
  )
}

export default About