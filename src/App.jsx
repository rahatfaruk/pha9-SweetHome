import { Outlet } from "react-router-dom";
import Navbar from "./comps/Navbar";

function App() {
  return (  
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;