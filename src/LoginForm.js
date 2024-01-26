import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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
    navigate('/');
  }


  return (
    <form className="LoginForm">
      <input
        className="form-control"
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <input
        className="form-control"
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="password"
      />
      <button className="btn-secondary btn" onClick={handleSubmit}>
        Login
      </button>
      { errors &&
      <ul>
        {
          errors.map(err =>
          <li>{err}</li>
          )
        }
      </ul>
      }
    </form>
  );
}

export default LoginForm;