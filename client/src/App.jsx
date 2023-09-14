import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/scholarshipType">Scholarship Type</Route>
          <Route path="/aboutUs">About Us</Route>
          <Route path="/contact">Contact</Route>
          <Route path="/applyNow">Apply Now</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
