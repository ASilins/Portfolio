import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home"
import UnderConstruction from './pages/underConstruction/UnderConstruction';
import ContactPage from './pages/contact/ContactPage';
import Work from './pages/work/Work';
import About from './pages/about/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UnderConstruction />} />
        <Route path='/home' element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
