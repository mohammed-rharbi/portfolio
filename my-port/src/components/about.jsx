import React, { useState } from "react";
import Icon from "./ui/icon";
import Contact from "./contact"; // Import the Contact component

function About() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>hey there 👋</h1>
          <div className="wrapper">
            <div className="bg"><span>I am</span> Mohammed <br/> Rharbi </div>
            <div className="fg"><span>I am</span> Mohammed <br/>  Rharbi </div>
          </div>
          <p><span>full-stack developer</span> passionate about crafting digital solutions.</p>

          <div className="vt">
            <button onClick={toggleForm} className="Btn">hire me</button>
            <a href="/src/assets/Mohammed_Rharbi.pdf" download={'Mohammed Rharbi CV '}>
              <button className="do "></button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/public/تصميم بدون عنوان.png" alt="Mohammed Rharbi"/>
        </div>
      </div>

      <div className="icons">
        <Icon/>
      </div>
    </section>
  )
}

export default About;
