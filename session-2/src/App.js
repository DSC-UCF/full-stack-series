import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './components/Pages/about'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route>

        </Route>
      </Switch>
    </Router>

  );
}

export default App;
