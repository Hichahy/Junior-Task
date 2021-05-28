import { useState, useEffect } from "react";

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
  
//Refresh zrobiony do imporu przez FormSucces by oświerzyć po kliku w <p>
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
    refreshAutomat

  };
};

export default useForm;
