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
      <LoginForm authenticate={authenticate}/>
    </div>
  )
}

export default Login;