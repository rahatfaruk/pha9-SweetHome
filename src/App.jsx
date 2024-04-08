import { Outlet } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";

function App() {
  return (  
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;