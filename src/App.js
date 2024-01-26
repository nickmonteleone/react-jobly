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

  console.log("App component rendered, user:", user);


  useEffect(function getUserDataOnMount() {
    async function getUserData() {

      if (username !== null) {
        const userData = await JoblyApi.getUser(username);
        setUser(userData);
      } else {
        setUser(null);
      }
    }
    getUserData();
  },[username]);

  /** Authenticate a user for log in. */
  function authenticate(loginInput) {
    const userInfo = {}; // add api call to log in

    setUser(userInfo);
  }

  /** Sign up a user. */
  async function signup(signupInput) {
    const userInfo = signupInput;

    const userToken = await JoblyApi.signup(userInfo);


    setToken(userToken);
    setUsername(userInfo.username);
  }

  /** Log out a user from the app. */
  function logOut() {
    setUser(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation user={user} />
        <RoutesList user={user} signup={signup} authenticate={authenticate} />
      </BrowserRouter>
    </div>
  );
}

export default App;
