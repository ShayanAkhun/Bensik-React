import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  // const [showNav, setShowNav] = React.useState(false);
  // React.useEffect(() => {
  //   if (window.location.pathname === "/signup") {
  //     setShowNav(true);
  //   } else {
  //     setShowNav(false);
  //   }
  // });
  return (
    <div>
      <Router>
        {/* {!showNav ? <Navbar /> : ''} */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
