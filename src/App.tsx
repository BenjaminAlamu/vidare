import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageWrapper from "./views/index";
import Info from "./views/Info";
import Details from "./views/Details";
import Success from "./views/Success";

import "./App.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route path="" element={<Info />} />
            <Route path="details" element={<Details />} />
            <Route path="success" element={<Success />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
