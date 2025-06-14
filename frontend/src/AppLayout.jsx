import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
