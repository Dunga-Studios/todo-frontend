import "./App.css";
import NavbarComponent from "./components/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import routes from "./configs/routes";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
