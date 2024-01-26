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
 * -loggedIn (true/false)
 * -username (logged in username)
 * -message (login or logout message)
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const [user, setUser] = useState(null);
  const isLoggedIn = (user !== null);
  console.log("App component rendered, user:", user);
  console.log("App username:", username, "loggedIn:", loggedIn);

  // Get user data when user name changes (i.e. log in or signup success)
  async function getUserData(username) {
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

  /** Authenticate a user for log in. */
  async function authenticate(loginInput) {
    const loginResult = await JoblyApi.login(loginInput);
    console.log("login result:", loginResult);
    await getUserData(loginInput.username);
  }


  /** Sign up a user. */
  async function signup(signupInput) {
    const signinResult = await JoblyApi.signup(signupInput);
    console.log("signin result:", signinResult);
    await getUserData(LoginInput.username);
  }

  /** Log out a user from the app. */
  function logout() {
    JoblyApi.logout();
    setUser(null);
    setUsername(null);
    setLoggedIn(null);
    setMessage('You have successsfully logged out.');
  }

  return (
    <userContext.Provider value={{ user, message, isLoggedIn }}>
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
