import React from "react";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Services from "./components/Services";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Router>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </Router>
  );
};

export default App;
