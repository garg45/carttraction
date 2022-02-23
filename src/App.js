import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Thanku from "./components/Thanku";
import PlaceOrder from "./components/PlaceOrder";
import PlaceCard from "./components/PlaceCard";
import Price from "./components/Price";
import CheckOut from "./components/CheckOut";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/placeOrder">
          <PlaceOrder />
        </Route>
        <Route path="/checkOut">
          <CheckOut />
        </Route>
        <Route path="/placeCard">
          <PlaceCard />
        </Route>
        <Route path="/orderPlaced">
          <Thanku />
        </Route>
        <Route path="/price">
          <Price />
        </Route>
        <Route path="/navbar">
          <NavBar />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default App;
