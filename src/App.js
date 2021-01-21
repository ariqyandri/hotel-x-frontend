import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./component/Navbar/index";
import { fetchCategories } from "./store/categories/action";

function App() {
  const dispatch = useDispatch;
  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
