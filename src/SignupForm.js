import "./SignupForm.css";
import { useState, useContext } from "react";
import userContext from "./userContext";


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

  const { errors } = useContext(userContext);


  /** Handle input to form. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /** Call callback function on form submit. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('signup formData', formData);
    signup(formData);
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
      {errors.signup &&
        <div>
          <h3>Errors:</h3>
          {errors.signup.map((err, idx) =>
            <div className='SignupForm-Errors' key={`error-${idx}`}>{err}</div>
            )
          }
        </div>
      }
    </form>
  );
}

export default SignupForm;