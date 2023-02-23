import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';

import Home from "./pages/home/Home"
import UnderConstruction from './pages/underConstruction/UnderConstruction';
import ContactPage from './pages/contact/ContactPage';
import Work from './pages/work/Work';
import About from './pages/about/About';
import LoadingAnimation from './animations/LoadingAnimation';
import Header from './components/header/Header';

function App() {

  const [techStack, setTechStack] = useState();
  const [showcase, setShowcase] = useState();
  const [projects, setProjects] = useState();
  const [labs, setLabs] = useState();

  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    let urls = [
      "https://backend.arturssilins.com/api/projects",
      "https://backend.arturssilins.com/api/labs",
      "https://backend.arturssilins.com/api/showcase",
      "https://backend.arturssilins.com/api/tech"
    ]

    const requests = urls.map((url) => axios.get(url,
      {
        responseType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }));

    axios.all(requests).then((response) => {
      for (let i = 0; i < response.length; i++) {
        if (i === 0) {
          setProjects(response[0].data);
        }
        else if (i === 1) {
          setLabs(response[1].data);
        }
        else if (i === 2) {
          setShowcase(response[2].data);
        }
        else if (i === 3) {
          setTechStack(response[3].data);
        }
      }

      setTimeout(() => {
        setDataLoaded(true);
      }, 500);

      setTimeout(() => {
        setLoading(false);
      }, 7000);
    })
  }, []);

  return (
    <>
      {
        loading ?
          <LoadingAnimation data={dataLoaded} /> :
          <>
            <Header />
            <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                <Route path='/underconstruction' element={<UnderConstruction />} />
                <Route path='/' element={<Home data={showcase} />} />
                <Route path="/work" element={<Work labs={labs} projects={projects} />} />
                <Route path="/about" element={<About data={techStack} />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </>
      }
    </>
  );
}

export default App;
