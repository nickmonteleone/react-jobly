/**renders button
 *
 * props: buttonText, path
 *
 * state: none
 *
 */

function NavigationButton({ buttonText, path }) {

  return (
    <Link to={path}>
      <button>{buttonText}</button>
    </Link>
  )
}