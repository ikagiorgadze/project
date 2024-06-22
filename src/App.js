import "./App.css";
import HomePage from "./components/js/HomePage";
import NavBar from "./components/js/NavBar";
import ContactPage from "./components/js/ContactPage";
import SignUp from "./components/js/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./components/js/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/register">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
