import React, { useState, Suspense, lazy } from "react";
import Footer from "../Footer/Footer";
import Spinner from "./Loading/Spinner";
import FormSignup from "./FormSignup";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const FormSuccess = lazy(() => import("./FormSuccess"));

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <Suspense fallback={<Spinner />}>
          <FormSuccess />
        </Suspense>
      )}
      <Footer />
    </>
  );
};

export default Form;
