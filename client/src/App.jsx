import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
