import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weapons" element={<Index />} />
            <Route path="/weapons/new" element={<New />} />
            <Route path="/weapons/:id" element={<Show />} />
            <Route path="/weapons/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        </header>
      </Router>
    </div>
  );
};