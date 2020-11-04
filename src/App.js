import React from "react";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Services from "./components/Services";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
