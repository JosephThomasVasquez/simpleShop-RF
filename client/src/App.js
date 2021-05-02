import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./bootstrap.min.css";
import "./custom.scss";
import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import ShopListProvider from "./contexts/ShopListContext";
import AuthRoute from "./components/AuthRoute";
import HomeView from "./views/HomeView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import ShopListView from "./views/ShopListView";
import ProfileView from "./views/ProfileView";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/signin" component={SignInView} />
          <Route exact path="/signup" component={SignUpView} />
          <ShopListProvider>
            <AuthRoute exact path="/shoppinglist" component={ShopListView} />
            <AuthRoute exact path="/profile" component={ProfileView} />
          </ShopListProvider>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
