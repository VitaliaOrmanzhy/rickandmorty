import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { MainPage } from "./components/MainPage/MainPage";
import { routes } from "./routes/routes";
import { InfoPage } from "./components/InfoPage/InfoPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="max-w-7xl ml-auto mr-auto relative mt-[10px] mb-[10px] pl-10 pr-10 md:pl-20 md:pr-20">
        <Routes>
          <Route path={routes.main} element={<MainPage />} />
          <Route path={routes.character + ":id"} element={<InfoPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
