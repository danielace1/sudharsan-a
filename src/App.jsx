import { Route, Routes } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="">
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
export default App;
