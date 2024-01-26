import "./Alert.css";
/**
 * renders an alert for error message
 *
 * props: error
 *
 * state: none
 *
 * RouteList -> Notfound
 */

function Alert({ error }) {
  return (
    <div className='Alert'>
      {error}
    </div>
  );
}

export default Alert;

