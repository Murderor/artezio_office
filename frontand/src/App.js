import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navi from "./components/Navi";

function App() {
  return (
    <BrowserRouter>
        <Navi/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
