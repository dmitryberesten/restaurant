import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/index';
import Hero from './hero/index';
import AboutUs from './aboutUs/index';
import Dishes from './dishes/index';
import Accordion from './accordion/index';
import Menu from '../pages/menu/index';
import QualityFood from './QualityFood/index';
import About from '../pages/about/index';
import QuickContact from './quickContact/index';
import Footer from './footer/index';
import LinkCantact from './linkContact/index';
import Contact from '../pages/contact/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <AboutUs />
                <Dishes />
                <Accordion />
                <QualityFood />
                <QuickContact />
                <LinkCantact />
              </>
            }
          />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Onas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
