import React from "react";

import "./FormSignup.css";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, } = useForm(
    submitForm,
    validate
  );


  return (
    <form onSubmit={handleSubmit}>
      <div className="main_container">
        <div className="box_up">
          <h1 className="h1_question">Skontaktuj się ze mną</h1>
          <img src="img/message.png" alt="message cloud" />
        </div>
        <div className="box_down">
          <p>Zawsze chętnie dowiemy się co Ci chodzi po głowie</p>
          <span>Imię</span>
          <div className="input_box">
            <input
              placeholder="Your name"
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <span>Adres e-mail</span>
          <div className="input_box">
            <input
              placeholder="Your email"
              id="email"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <span>Treść wiadomości</span>
          <div className="input_box">
            <textarea
              placeholder="Your message"
              id="message"
              name="message"
              type="text"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
          </div>
        </div>
        <button type="submit" >Wyślij</button>
      </div>
    </form>
  );
};

export default FormSignup;
