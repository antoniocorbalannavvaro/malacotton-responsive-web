import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './app.module.css';

// PAGES:
import HomePage from "./pages/home/HomePage";
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import ConcertsPage from './pages/concerts/ConcertsPage';
import ReleasesPage from './pages/releases/ReleasesPage'

// COMPONENTS:
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className={style.app}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/concerts' element={<ConcertsPage/>}></Route>
            <Route path='/releases' element={<ReleasesPage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
          </Routes>
        
      </BrowserRouter>
    </div>


  );
}

export default App
