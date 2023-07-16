import React, { useState } from 'react';
import './Contact.css';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let newText = formData.name.replace(/[ ]+/g, '');
    setFormData(newText)


  };
  const myStyle = {
    backgroundImage: "url(/images/saif-2.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: "2px solid  #38173A",
    backgroundPosition: 'top',
    marginTop:'50px'

  }

  return (
    <div className="Contact-sec">
      <div className="container py-5">
        <div className=" image-section img-fluid my-4 ">
          <div className="imageContactPage" style={myStyle} ></div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <input className="input-text" type="submit" Submit />
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

