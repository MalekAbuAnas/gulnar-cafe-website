import { Route, Routes } from "react-router-dom";
import { Home, About, Services, Menu, Contact } from "./pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
