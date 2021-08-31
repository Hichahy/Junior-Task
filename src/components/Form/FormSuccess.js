import React from 'react';
import './FormSignup.css'
import useForm from "./useForm"

const FormSuccess = () => {
const {refresh, refreshAutomat} = useForm()

refreshAutomat()

  return (
  <div className="main_box_succes">
    <div className="box_succes">
    
    </div>
    <div className="box_succes_down">
    <img  src="img/successMessage.png" alt="conversation" />
    <h1>Message was send.</h1>
    <h1>Thank You!</h1>
      <p>I will try to write back as soon as possible</p>
      <p style={{color:"#02c5c1",cursor:"pointer"}} onClick={refresh}>go back</p>
    </div>
  </div>
  );
};

export default FormSuccess;