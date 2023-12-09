import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./pages/home/HomePage";
import "./assets/Global.css";
import About from "./pages/about/About";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
