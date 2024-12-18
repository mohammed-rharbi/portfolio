import React, { useState } from "react";
import Icon from "./ui/icon";
import Contact from "./contact";
import Skills from "./skills";

function About() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="w-full min-h-screen text-white">

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12 py-16 relative z-10">

          <div className="md:w-1/2 text-center md:text-left space-y-6">

            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Hello, <span className="text-[#FFD700] animate-pulse">World</span>!
              </h1>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-transparent"></div>
            </div>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              I'm <span className="text-[#FFD700] font-bold">Mohammed Rharbi</span>, a 
              <span className="bg-[#FFD700] text-black px-2 rounded-full ml-2 inline-block">
                Full-Stack Developer
              </span>
              {" "}crafting innovative digital solutions with passion and precision.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={toggleForm}
                className="group relative px-8 py-3 rounded-full 
                  bg-[#FFD700] text-black font-semibold 
                  hover:bg-[#FFC700] transition duration-300 
                  transform hover:scale-105 shadow-lg 
                  hover:shadow-[#FFD700]/50"
              >
                Hire Me
                <span className="absolute top-0 right-0 -mr-2 -mt-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
              </button>
              
              <a
                href="/mohammed-rharbi-cv.pdf"
                download="Mohammed Rharbi CV"
                className="px-8 py-3 rounded-full 
                  border-2 border-[#FFD700] text-[#FFD700] 
                  hover:bg-[#FFD700] hover:text-black 
                  transition duration-300 
                  transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>


          <div className="md:w-1/2 relative group">
            <div className="absolute -inset-2 bg-[#FFD700] rounded-xl 
              opacity-75 group-hover:opacity-100 transition duration-300 
              blur-xl group-hover:blur-lg animate-pulse"></div>
            
            <img
              src="/file.png"
              alt="Mohammed Rharbi" 
              className="relative w-full max-w-sm mx-auto rounded-xl 
                shadow-2xl group-hover:shadow-[#FFD700]/50 
                transition duration-300 transform group-hover:scale-105"
            />
          </div>
        </div>
        <Icon />
      </section>


      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <Skills />
        </div>
      </section>


      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm 
          flex items-center justify-center z-50">
          <div className="bg-[#1e1e1e] w-11/12 max-w-lg p-8 
            rounded-2xl shadow-2xl border-2 border-[#FFD700]/20">
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 
                text-gray-400 hover:text-[#FFD700] 
                text-2xl transition"
            >
              ✖
            </button>
            <Contact showForm={showForm} toggleForm={toggleForm} />
          </div>
        </div>
      )}
    </main>
  );
}

export default About;
