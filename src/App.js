import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Button from './DevSimplified';
import { Switch, Route, BrowserRouter as Router  } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotPage from './404page';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home text={'This is from the otherside'}/>
          </Route>
          <Route path='/create'>
            <Create text={'This is for Create'}/>
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails text={'This is for Blog Details With ID=>'}/>
          </Route>
          <Route path='*'>
            <NotPage text={'404 Page Not Found'}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
