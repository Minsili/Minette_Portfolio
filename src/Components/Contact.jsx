import React, { useState } from 'react';
import contactImage from '../assets/contact-image.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    secondname: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Form data being sent:", formData); // Log form data
  
      const response = await fetch('https://minette-portfolio-jnda.onrender.com//send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Server response:", data); // Log server response
  
      if (response.ok) {
        alert('Your message has been sent!');
        // Clear form after successful submission
        setFormData({
          firstname: '',
          secondname: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again later.');
        // Clear form after displaying failure message
        setFormData({
          firstname: '',
          secondname: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      }
    } catch (error) {
      console.error("Error during submission:", error); // Log the error
      alert('Error occurred: ' + error.message);
    }
  };
  
  return (
    <div id='contact' className='contact-container'>
      <div className="contact-form">
        <div className="image">
            <img src={contactImage} alt="" />
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
              <h3>Contact Form</h3>
              
                <div className="inputs">
                    <div className="input">
                       <input 
                         type="text" 
                         name='firstname' 
                         placeholder='First name' 
                         value={formData.firstname}
                         onChange={handleChange}
                       />

                       <input 
                         type="text" 
                         name='secondname' 
                         placeholder='Second name'
                         value={formData.secondname}
                         onChange={handleChange}
                       />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                       <input 
                         type="email" 
                         name='email' 
                         placeholder='Email Address'
                         value={formData.email}
                         onChange={handleChange}
                       />

                       <input 
                         type="number" 
                         name='phoneNumber' 
                         placeholder='Phone number' 
                         value={formData.phoneNumber}
                         onChange={handleChange}
                       />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                      <textarea 
                        placeholder='Enter your message...'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                </div>
                <div className="submit-btn">
                    <button type='submit'>Send Message</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
