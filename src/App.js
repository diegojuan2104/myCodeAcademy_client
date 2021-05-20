import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Auth from "./components/Auth/Auth.component.js";
import Home from "./components/Home/Home.component.js"
import Header from "./components/Header/Header.component.js"

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
            <Route exact path="/" component={Auth} />
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
