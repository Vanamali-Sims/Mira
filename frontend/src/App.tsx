import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { BusinessPortal, Home, Journal, Quests, Rewards } from "./pages";
import { FastAPIGetHook } from "./api/mockGetApi";

function App() {
  const {response, isLoading, getSomeData} = FastAPIGetHook();

  const handleApiCall = async () => {
    await getSomeData();
  }

  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      <Router>
        <Navbar />
        <button onClick={handleApiCall}>
          button1
       </button>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/journal" element={<Journal />} />
           <Route path="/quests" element={<Quests />} />
           <Route path="/rewards" element={<Rewards />} />
           <Route path="/partners" element={<BusinessPortal />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
