import { Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import AppLayout from "./AppLayout.jsx";
import NotFound from "./components/NotFound.jsx";
import Destinations from "./components/Destinations.jsx";
import Services from "./components/Services.jsx";
import TopSelling from "./components/TopSelling.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="services" element={<Services />} />
        <Route path="top-selling" element={<TopSelling />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
