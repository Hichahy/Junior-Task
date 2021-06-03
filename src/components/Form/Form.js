import React, { useState, Suspense, lazy } from "react";
import Footer from "../Footer/Footer";
import Spinner from "./Loading/Spinner";
import FormSignup from "./FormSignup";


// Hook
// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return windowSize;
// }

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const FormSuccess = lazy(() => import("./FormSuccess"));

  function submitForm() {
    setIsSubmitted(true);
  }

  // const size = useWindowSize();

  return (
    <>
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <Suspense fallback={<Spinner />}>
          <FormSuccess />
        </Suspense>
      )}
      
      {/* {size.width < 500 ? <FooterMobile /> : <Footer />} */}
      <Footer />
    </>
  );
};

export default Form;
