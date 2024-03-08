import { Header, Body, Footer } from "../components/appStructure.js";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
