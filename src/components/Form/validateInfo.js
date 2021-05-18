export default function validateInfo(values) {
  let errors = {};

  //Name
  if (!values.name.trim()) {
    errors.name = "Name required";
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
  } else if (values.message.length > 120) {
    errors.message = "Message is to long";
  }

  return errors;
}
