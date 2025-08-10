import { Route, Routes } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="">
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
