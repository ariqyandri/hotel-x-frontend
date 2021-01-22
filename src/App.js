import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "hover.css";
import Navbar from "./component/Navbar/index";
import HomePage from "./pages/HomePage/index";
import { initialFetch } from "./store/categories/action";
import RoomsPage from "./pages/RoomsPage/index";
import AttractionsPage from "./pages/AttractionsPage/index";
import FacilitiesPage from "./pages/FacilitiesPage/index";
import AboutPage from "./pages/AboutPage/index";
import ContactPage from "./pages/ContactPage/index";
import ReservationPage from "./pages/ReservationPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialFetch());
  }, [dispatch]);
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms/:type?" component={RoomsPage} />
        <Route exact path="/reservation" component={ReservationPage} />
        <Route exact path="/facilities" component={FacilitiesPage} />
        <Route exact path="/attractions" component={AttractionsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
