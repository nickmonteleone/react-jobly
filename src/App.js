import './App.css';
import { useState } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import userContext from "./userContext";

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
  console.log("App component rendered, user:", user);

  /** Authenticate a user for log in. */
  function authenticate(loginInput){
    const userInfo = {}; // add api call to log in

    setUser(userInfo)
  }

  /** Sign up a user. */
  function signup(signupInput){
    const userInfo = signupInput;
    setUser(userInfo)

    //TODO: need a way to redirect to home after sign up
  }

  /** Log out a user from the app. */
  function logOut() {
    setUser(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation user={user}/>
        <RoutesList user={user} signup={signup} authenticate={authenticate}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
