import React, { useState, useRef, useEffect } from "react";
import emailjs from 'emailjs-com';

function Contact({ showForm, toggleForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      toggleForm();
    }
  };

  useEffect(() => {
    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_4754r22', 'template_tdgxkhk', formData, 'h2FgPbR8cOJN74Drg')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (err) => {
        console.log('FAILED...', err);
        setSuccessMessage('Failed to send your message. Please try again later.');
      });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {showForm && <div className="overlay"></div>}
      {showForm && (
        <div className="form-container" ref={formRef}>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <span className="heading">Get in touch</span>
              <input
                placeholder="Name"
                type="text"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                placeholder="Email"
                id="mail"
                type="email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                placeholder="Subject"
                id="subject"
                type="text"
                className="input"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder="Say Hello"
                rows="10"
                cols="30"
                id="message"
                name="message"
                className="textarea"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="button-container">
                <button className="send-button" type="submit">Send</button>
                <div className="reset-button-container">
                  <button type="button" className="reset-button" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </div>
            </form>
            {successMessage && <p>{successMessage}</p>}
          </div>
        </div>
      )}



      
    </>
  );
}

export default Contact;
