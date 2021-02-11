import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutPage from './components/Pages/about'
import NavBar from './components/navbar/nav';
import Footer from './components/footer/foot';
import { Container } from 'react-bootstrap';

function App() {
  return (

    <Router>
      <Switch>
        <Container fluid style={{ padding: 0, margin: 0 }}>
          <NavBar />
          <Route exact path="/">
            <Link to="/about">Probably meant to go here</Link>
          </Route>
          <Route path="/about" component={AboutPage} />
          <Footer />
        </Container>
      </Switch>
    </Router>

  );
}

export default App;
