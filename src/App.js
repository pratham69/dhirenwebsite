import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Screens/Main';

function App() {
  return (
    <Router >
      <Navbar />

      <Switch >
        <Route to='/' component={Main} exact></Route>
      </Switch>

    </Router>
  );
}

export default App;
