import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import userContext from "./userContext";
import JoblyApi from './api';

/** App component for jobly
 *
 * Props:
 * -None
 *
 * States:
 * -user - null or {username, firstName, lastName, email, isAdmin }
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [errors, setErrors] = useState(null);

  console.log("App component rendered, user:", user, "token:", token);


  // useEffect(function getUserDataOnMount() {
  //   async function getUserData() {
  //     console.log("App useEffect getUserDataOnMount")
  //     if (username !== null) {
  //       const userData = await JoblyApi.getUser(username);
  //       setUser(userData);
  //     } else {
  //       setUser(null);
  //     }
  //   }
  //   getUserData();
  // },[username]);

  /** Authenticate a user for log in. */
  async function authenticate(loginInput) {

    try {
      const userToken = await JoblyApi.login(loginInput);
      console.log("signup user token:", userToken)
      setToken(userToken);
    }
    catch (err) {
      console.log("signup failed:", err);
    }
  }

  /** Sign up a user. */
  async function signup(signupInput) {

    try {
      const userToken = await JoblyApi.signup(signupInput);
      console.log("signup user token:", userToken)
      setToken(userToken);
    }
    catch (err) {
      console.log("signup failed:", err);
      setErrors(errors);
    }
  }

  /** Log out a user from the app. */
  function logOut() {
    setUser(null);
  }

  return (
    <userContext.Provider value = {{user, errors}}>
      <div className="App">
        <BrowserRouter>
          <Navigation user={user} />
          <RoutesList user={user} signup={signup} authenticate={authenticate} />
        </BrowserRouter>
      </div>
    </userContext.Provider>

  );
}

export default App;
