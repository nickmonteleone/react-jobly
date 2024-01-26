import SignupForm from "./SignupForm";

/**
 * renders signup page
 *
 * props: signup()
 *
 * state: none
 *
 * RoutesList -> Signup -> SignupForm
 */

function Signup({ signup }) {

  return (
    <div className="Signup">
      <h1>Signup:</h1>
      <SignupForm signup={signup} />
    </div>
  )
}

export default Signup;