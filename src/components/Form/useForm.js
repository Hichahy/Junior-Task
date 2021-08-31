import { useState, useEffect } from "react";
import emailjs from "emailjs-com"

const useForm = ( callback, validate) => {


  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const canBeSubmitted = () => {
    return (
      values.name.length > 0 &&
      values.email.length > 0 &&
      values.message.length > 0
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target; //destrukuryzacja
    setValues({
      ...values,
      [name]: value,
    });
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_g53hzli', 'template_xis32lo', e.target, 'user_PhVsmGbULYRoY9DfzPYKm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setErrors(validate(values));
    setIsSubmitting(true);
    setLoading(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting ) {
      callback();
    }
  }, [errors]);
  
//Refresh zrobiony do imporu przez FormSucces by ośdwierzyć po kliku sek w <p> go back
 const refresh = () => {
    window.location.reload()
   }

//Funkcja odświerzajaca strone po isSubbmitting
   const refreshAutomat = () => {
     setTimeout(function(){
      refresh();
   }, 6000);
   }
    

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    canBeSubmitted,
    isSubmitting,
    loading,
    refresh,
    refreshAutomat,
    sendEmail
  };
};

export default useForm;
