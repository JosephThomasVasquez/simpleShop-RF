import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './bootstrap.min.css';
import HomeView from "./views/HomeView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import ShopListView from "./views/ShopListView";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/signin" component={SignInView} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/shoppinglist" component={ShopListView} />
      </Switch>
    </Router>
  );
}

export default App;
