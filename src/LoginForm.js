import { useState, useContext } from "react";
import userContext from "./userContext";

/**
 * renders loginform
 *
 * props: authenticate()
 *
 * state: formData
 *
 * login -> LoginFrom
 */


function LoginForm({ authenticate }) {
  const { errors } = useContext(userContext);
  const [formData, setFormData] = useState(
    {
      username: "",
      password: "",
    }
  );

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
    console.log('login formData', formData);
    authenticate(formData);
  }

  return (
    <form className="LoginForm">
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
      <button className="btn-secondary btn" onClick={handleSubmit}>
        Login
      </button>
      { errors &&
      <div>
        <h3>Errors:</h3>
        {
          errors.map((err, idx) =>
          <div key={`error-${idx}`}>{err}</div>
          )
        }
      </div>
      }
    </form>
  );
}

export default LoginForm;