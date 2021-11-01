import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login/Login.js";
import Astro from "./components/Astro/Astro.js";
import Profile from "./components/Profile/Profile.js";
import ISS from "./components/ISS/ISS.js";

import firebase from './firebase';

export default function App() {
  return (
    <div className="App">

        <Route
        component={Login}
        />

        <Route
        component={Astro}
        />

        <Route
        component={Profile}
        />

        <Route
        component={ISS}
        />

    </div>
  );
}
