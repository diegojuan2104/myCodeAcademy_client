import React from 'react'
import ReactDOM from 'react-dom'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import AuthForm from "./components/AuthForm/AuthForm.component.js";
import About from "./components/About/About.component.js"
import ChallengesTable from "./components/ChallengesTable/ChallengesTable.component.js"
import Leaderboard from "./components/Leaderboard/Leaderboard.component.js"
import  SubmitChallenge from "./components/SubmitChallenge/SubmitChallenge.component.js"
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./Routes/PrivateRoute"

import Footer from "./components/Footer/Footer.component";


function App() {
  return (
    <div className="app">
      <Router>
        <Provider store={store}>
          
          <Switch>
            <PrivateRoute exact path="/" component={AuthForm} />
            <PrivateRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/challenges" component={ChallengesTable} />
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
            <PrivateRoute exact path="/challenges/:id" component={SubmitChallenge} />
          </Switch>
          {/* <Footer/> */}
        </Provider>
      </Router>
    </div>
  );
}

export default App;
