import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { appFirestore } from "./firebase/config";
import HomeView from "./views/HomeView";
import ShopListView from "./views/ShopListView";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/shoppinglist" component={ShopListView} />
      </Switch>
    </Router>
  );
}

export default App;
