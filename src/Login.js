import LoginForm from "./LoginForm";

/** renders login page
 *
 * props: authenticate()
 *
 * state: none
 *
 * RouteList -> Login -> loginForm
 */


function Login({ authenticate }) {

  return (
    <div className="Login">
      <h1>Login:</h1>
      <LoginForm authenticate={authenticate}/>
    </div>
  )
}

export default Login;