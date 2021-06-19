import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Article from './components/Article';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route  path='/register' exact component={Register}>
            <Register />
          </Route>
        </Switch>
          <Route exact path='/home' component={Home}>
            <Home />
          </Route>
          <Route exact path='/article' component={Article}>
             <Article />
          </Route>

          <Route exact path='/categories' component={Categories}>
             <Categories />
          </Route>
      </Router>

      <Login />

      <Footer />
      
    </div>
  );
}

export default App;
