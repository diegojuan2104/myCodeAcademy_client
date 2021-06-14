import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import AuthForm from "./components/AuthForm/AuthForm.component.js";
import About from "./components/About/About.component.js"
import Practice from "./components/Practice/Practice.component.js"
import Leaderboard from "./components/Leaderboard/Leaderboard.component.js"
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
            <PrivateRoute exact path="/practice" component={Practice} />
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          </Switch>
          {/* <Footer/> */}
        </Provider>
      </Router>
    </div>
  );
}

export default App;
