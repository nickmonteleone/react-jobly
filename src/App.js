import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';

/** App component for jobly
 *
 * Props:
 * -None
 *
 * States:
 * -None
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  console.log("App component rendered");

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
