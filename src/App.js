import "./App.css";
import { Route, Routes } from "react-router";
import { MainPage } from "./components/MainPage/MainPage";
import { routes } from "./routes/routes";
import { InfoPage } from "./components/InfoPage/InfoPage";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mr-auto ml-auto relative mt-[10px] mb-[10px] pl-20 pr-20">
        <Routes>
          <Route path={routes.main + ":page?"} element={<MainPage />} />
          <Route path={routes.character + ":id"} element={<InfoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
