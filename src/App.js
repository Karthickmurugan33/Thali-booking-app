
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './components/About/Contact';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path={"/cart"}>
            <Cart />
          </Route>
          <Route path={"/contact"}>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>

    </div >
  );
}

export default App;
