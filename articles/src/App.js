import React from 'react';
import './App.css';
import './index.css';
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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
            crossorigin="anonymous" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
            crossorigin="anonymous"/>
      
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
          
          <Route exact path="/" component={Login}>
             <Login />
          </Route>
         
      </Router>

      

      <Footer />
      
    </div>
  );
}

export default App;
