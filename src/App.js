import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PersonPage from "./pages/PersonPage";
import SpecificPersonPage from "./pages/SpecificPersonPage";
import Navbar from "./components/Navbar";
import DynamicDataPage from "./pages/DynamicDataPage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/data/:dataId" element={<DynamicDataPage />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/person/:fname/:lname" element={<SpecificPersonPage />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
