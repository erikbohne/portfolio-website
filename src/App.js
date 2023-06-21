import { Route, Routes,} from "react-router-dom";
import LandingPage from "./scenes/landing";
import NavBar from "./scenes/global/NavBar";

function App() {
  return (
    <div className='app'>
      <main className='content'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
