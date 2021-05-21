import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Auth from "./components/Auth/Auth.component.js";
import Home from "./components/Home/Home.component.js"
import Learn from "./components/Learn/Learn.component.js"
import Practice from "./components/Practice/Practice.component.js"
import Leaderboard from "./components/Leaderboard/Leaderboard.component.js"
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./Routes/PrivateRoute"



function App() {
  return (
    <div className="app">
      <Router>
        <Provider store={store}>
          <Switch>
            <PrivateRoute exact path="/" component={Auth} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/learn" component={Learn} />
            <PrivateRoute exact path="/practice" component={Practice} />
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
