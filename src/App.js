import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/index";
import HomePage from "./pages/HomePage/index";
import { fetchCategories } from "./store/categories/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
