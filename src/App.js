import "./App.css";
import Auth from "./components/Auth/Auth.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
