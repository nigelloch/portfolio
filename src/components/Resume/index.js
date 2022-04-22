import React from 'react'
import resumeImage from "../../assets/resume/nigelresume.jpg";


function Resume() {

  return (
    <section className="my-5 about-container"  >
    <div >
      <h1 id="about">Have a look at my resume</h1>
      
      <a href={require("../../assets/resume/nigelresume.pdf")} download="Nigel Resume">
      <img src={resumeImage} className="my-2" style={{ height: "auto", width: "80%" }} alt="resume" />
      </a>
    </div>
      <div id="about-text" className="my-2">
        <p>

        </p>
      </div>
    </section>
  )
}
export default Resume;

