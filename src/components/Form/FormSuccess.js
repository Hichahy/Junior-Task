import React from 'react';
import './FormSignup.css'


const FormSuccess = () => {
  return (
  <div className="main_box_succes">
    <div className="box_succes">
    <img  src="img/successMessage.png" alt="conversation" />
    </div>
    <div className="box_succes_down">
    <h1>Message was send.</h1>
    <h1>Thank You!</h1>
      <p>I will try to write back as soon as possible</p>
    </div>
  </div>
  );
};

export default FormSuccess;