<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/Navigation";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
>>>>>>> 20765480f3d9c1b02e2dd29a2c643492fd18a245

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
