import "./SignupForm.css";
import { useState } from "react";
import Alert from "./Alert";

/**
 * renders signup form
 *
 * props: signup()
 *
 * state: formData
 *
 * Signup -> SignupForm
 */

function SignupForm({ signup }) {
  const [formData, setFormData] = useState(
    {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    }
  );
  const [errors, setErrors] = useState(null);

  /** Handle input to form. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /** Call callback function on form submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log('signup formData', formData);
    try {
      await signup(formData);
    }
    catch (err) {
      console.log("signup failed:", err);
      setErrors(err);
    }
  }

  return (
    <form className="SignupForm">
      <input
        className="form-control"
        name="username"
        onChange={handleChange}
        placeholder="username"
        required
        autoComplete="false"
      />
      <input
        className="form-control"
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="password"
        required
        autoComplete="false"
      />
      <input
        className="form-control"
        name="firstName"
        onChange={handleChange}
        placeholder="first name"
        required
        autoComplete="false"
      />
      <input
        className="form-control"
        name="lastName"
        onChange={handleChange}
        placeholder="last name"
        required
        autoComplete="false"
      />
      <input
        className="form-control"
        name="email"
        type="email"
        onChange={handleChange}
        placeholder="email"
        required
        autoComplete="false"
      />
      <button className="btn-secondary btn" onClick={handleSubmit}>
        Signup
      </button>
      {errors &&
        <div className="SignupForm-errors">
          <h3>Errors:</h3>
          {errors.map((err, idx) =>
            <Alert key={idx} error={`${idx + 1}. ${err}`} />
          )}
        </div>
      }
    </form>
  );
}

export default SignupForm;