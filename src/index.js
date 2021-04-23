import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './aboutme';
import Malaria from './Malaria';
import spanish from './spanish';
import Background from './background';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
  <Switch>
    <Route exact path="/" component={Background }/>
    <Route exact path="/main" component={App }/>
   <Route exact path="/about" component={About }/>
   <Route exact path="/malaria" component={Malaria }/>
   <Route exact path="/spanish" component={spanish }/>
   
 </Switch>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
