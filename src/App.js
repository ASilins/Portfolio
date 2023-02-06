import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home"
import UnderConstruction from './pages/underConstruction/UnderConstruction';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UnderConstruction />} />
        <Route path='/home' element={<Home />} />
        <Route path="/work" element={<UnderConstruction />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/contact" element={<UnderConstruction />} />
      </Routes>
    </>
  );
}

export default App;
