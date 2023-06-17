import './styles/main.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Registration from './components/pages/Registration';
import Thefts from './components/pages/Thefts';
import InfoTheft from './components/pages/InfoTheft';
import Details from './components/pages/Details';
import Officers from './components/pages/Officers';
import NewOfficer from './components/pages/NewOfficer';
import Footer from './components/pages/Footer';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registration' element={<Registration type='registration' />} />
                <Route path='/login' element={<Registration type='login' />} />
                <Route path='/thefts' element={<Thefts />} />
                <Route path='/thefts/edit/:id' element={<InfoTheft />} />
                <Route path='/infotheft' element={<InfoTheft />} />
                <Route path='/infotheft/:id' element={<Details type='infotheft' />} />
                <Route path='/officers' element={<Officers />} />
                <Route path='/officers/edit/:id' element={<NewOfficer type='officers' />} />
                <Route path='/newofficer' element={<NewOfficer />} />
                <Route path='/officer/:id' element={<Details type='officers' />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;