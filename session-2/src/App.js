import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Browser as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './components/Pages/about'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">

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
