import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import About from './about.';
import './App.css';
import Home from './home';

function App() {
  return (
    <Router>
      <Route path='/about' component={About}></Route>
      <Route path='/' component={Home} exact></Route>
    </Router>
  );
}

export default App;
