import { useState } from "react";
import Alert from "./Alert";

/**
 * renders loginform
 *
 * props: authenticate()
 *
 * state:
 * - formData
 * - errors
 *
 * login -> LoginFrom
 */


function LoginForm({ authenticate }) {
  const [errors, setErrors] = useState(null);
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
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log('login formData', formData);
    try {
      await authenticate(formData);
    }
    catch (err) {
      console.log("login failed:", err);
      setErrors(err);
    }
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
      {errors &&
        <div className="LoginForm-errors">
          <h3>Errors:</h3>
          {errors.map((err, idx) =>
            <Alert key={idx} error={`- ${err}`} />
          )}
        </div>
      }
    </form>
  );
}

export default LoginForm;