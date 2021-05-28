export default function validateInfo(values) {
  let errors = {};

  //Name
  if (!values.name.trim()) {
    errors.name = "Name required";
  } else if (values.name.length < 2 ) {
    errors.name="Name is to short"
  }

  //Email
  if (!values.email) {
    errors.email = "Email name required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //Message
  if (!values.message.trim()) {
    errors.message = "Write me a message ";
  } else if (values.message.length > 120 ) {
    errors.message = "Message is to long, you can use only 120 letters";
  }

  return errors;
}
