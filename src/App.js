import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [errors, setErrors] = useState({
    signup: null, authenticate: null
  });
  const [message, setMessage] = useState(null);

  console.log("App component rendered, user:", user);
  console.log("App username:", username, "loggedIn:", loggedIn);

  // Get user data when user name changes (i.e. log in or signup success)
  useEffect(function getUserDataOnMount() {
    async function getUserData() {
      console.log("App useEffect getUserDataOnMount. username:", username);
      if (username !== null) {
        const userData = await JoblyApi.getUser(username);
        setUser(userData);
        console.log("userdata acquired", userData);
        setMessage(`Welcome, ${userData.firstName}!`);
      } else {
        setUser(null);
      }
    }
    getUserData();
  }, [username]);

  /** Authenticate a user for log in. */
  async function authenticate(loginInput) {
    try {
      const loginResult = await JoblyApi.login(loginInput);
      console.log("login result:", loginResult);
      setLoggedIn(loginResult);
      setUsername(loginInput.username);
      setErrors({
        signup: null, authenticate: null
      });
    }
    catch (err) {
      console.log("login failed:", err);
      setErrors(data => ({...data, authenticate: err}));
    }
  }

  /** Sign up a user. */
  async function signup(signupInput) {

    try {
      const signinResult = await JoblyApi.signup(signupInput);
      console.log("signin result:", signinResult);
      setLoggedIn(signinResult);
      setUsername(signupInput.username);
      setErrors({
        signup: null, authenticate: null
      });
    }
    catch (err) {
      console.log("signup failed:", err);
      setErrors(data => ({...data, signup: err}));
    };
  }


  /** Log out a user from the app. */
  function logout() {
    JoblyApi.logout();
    setUser(null);
    setUsername(null);
    setLoggedIn(null);
    setMessage('You have successsfully logged out');

    return 'you have successfully logged out';
  }

  return (
    <userContext.Provider value={{ user, errors, message }}>
      <div className="App">
        <BrowserRouter>
          <Navigation logout={logout} user={user} />
          <RoutesList user={user} signup={signup} authenticate={authenticate} />
        </BrowserRouter>
      </div>
    </userContext.Provider>

  );
}

export default App;
