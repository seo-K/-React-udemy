import { useState } from "react";
import CustomInput from "./CustomInput";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div>
        {/* <CustomInput label={"Email"} invalid={emailNotValid} onChange={(event) => handleInputChange("email", event.target.value)} />
        <CustomInput label={"Password"} invalid={passwordNotValid} onChange={(event) => handleInputChange("password", event.target.value)} /> */}
      </div>
      <div className="actions">
        <button type="button">Create a new account</button>
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
