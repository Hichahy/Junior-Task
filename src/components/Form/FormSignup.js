import React from "react";

import "./FormSignup.css";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = ({ submitForm }) => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    canBeSubmitted,
    sendEmail,
  } = useForm(submitForm, validate);

  const isEnabled = canBeSubmitted();

  function SendThisShit(e) {
    handleSubmit(e);
    sendEmail(e);
  }

  return (
    <form onSubmit={SendThisShit}>
      <div className="main_container">
        <div className="box_up">
          <h1 className="h1_question">Contact me</h1>
          <img src="img/message.png" alt="message cloud" />
        </div>
        <div className="box_down">
          <div className="p-box">
            <p>We are always happy to find out </p>
            <p>what's on your mind</p>
          </div>

          <span>Name</span>
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
          <span>e-mail</span>
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
          <span>Message content</span>
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
          <button type="submit" disabled={!isEnabled}>
            Send!
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSignup;
