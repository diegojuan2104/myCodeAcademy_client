import "./App.css";
import Auth from "./components/Auth/Auth.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="app">
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Auth} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
