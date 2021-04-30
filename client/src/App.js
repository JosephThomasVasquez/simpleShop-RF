import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./bootstrap.min.css";
import './custom.scss';
import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import AuthRoute from "./components/AuthRoute";
import HomeView from "./views/HomeView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import ShopListView from "./views/ShopListView";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/signin" component={SignInView} />
          <Route exact path="/signup" component={SignUpView} />
          <AuthRoute exact path="/shoppinglist" component={ShopListView} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
