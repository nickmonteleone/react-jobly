import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import userContext from "./userContext";
import JoblyApi from './api';
import useLocalStorage from 'use-local-storage';

/** App component for jobly
 *
 * Props:
 * -None
 *
 * States:
 * -user - null or {username, firstName, lastName, email, isAdmin } *
 * -storedLogin {user: null or {userData}, token: null or tokenStr}
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const [user, setUser] = useState(null);
  const [storedLogin, setStoredLogin] = useLocalStorage(
    'storedLogin', { user: null, token: null }
  );
  const isLoggedIn = (user !== null);
  console.log("App component rendered, user:", user);
  console.log("App user:", user, "loggedIn:", isLoggedIn);

  // if not logged in check local storage to see if info in local storage
  if (!isLoggedIn &&
    storedLogin.user !== null && storedLogin.token !== null) {
    // log in from local storage info
    setUser(storedLogin.user);
    JoblyApi.setToken(storedLogin.token);
    console.log("Logged in user from local storage:", storedLogin.user);
  }

  // Get user data when user name changes (i.e. log in or signup success)
  async function getUserData(username) {
    console.log("App useEffect getUserDataOnMount. username:", username);
    if (username !== null) {
      const userData = await JoblyApi.getUser(username);
      setUser(userData);
      setStoredLogin(stored => ({
        ...stored, user: userData
      }));
      console.log("userdata acquired:", userData);
    } else {
      setUser(null);
    }
  }

  /** Authenticate a user for log in. */
  async function authenticate(loginInput) {
    const tokenResult = await JoblyApi.login(loginInput);
    setStoredLogin(stored => ({
      ...stored, token: tokenResult
    }));
    console.log("token result:", tokenResult);
    await getUserData(loginInput.username);
  }

  /** Sign up a user. */
  async function signup(signupInput) {
    const tokenResult = await JoblyApi.signup(signupInput);
    setStoredLogin(stored => ({
      ...stored, token: tokenResult
    }));
    console.log("token result:", tokenResult);
    await getUserData(signupInput.username);
  }

  /** Log out a user from the app. */
  function logout() {
    JoblyApi.logout();
    setUser(null);
    setStoredLogin({ user: null, token: null });
  }

  return (
    <userContext.Provider value={{ user, isLoggedIn }}>
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
