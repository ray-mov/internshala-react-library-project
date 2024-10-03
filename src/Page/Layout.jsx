import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-[90%] mx-auto mt-32">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
