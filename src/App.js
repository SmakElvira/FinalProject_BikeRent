import './styles/main.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/pages/Home';
import Footer from './components/footer/Footer';
import Thefts from './components/pages/Thefts';
import AboutUs from './components/pages/AboutUs';
import InfoTheft from './components/pages/InfoTheft';
import NewTheft from './components/pages/NewTheft';
import ScrollToTop from './utils/scrollToTop';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Officers from './components/pages/Officers';
import InfoOfficer from './components/pages/InfoOfficer';
import NewOfficer from './components/pages/NewOfficer';

//import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/thefts' element={<Thefts />} />
                <Route path='/infotheft/:id' element={
                //<RequireAuth>
                    <InfoTheft />
                //</RequireAuth>
                } />
                <Route path='/infotheft' element={<NewTheft />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/officers' element={
                //<RequireAuth>
                    <Officers />
                //</RequireAuth>
                } />
                <Route path='/officer/:id' element={
                //<RequireAuth>
                    <InfoOfficer />
                //</RequireAuth>
                } />
                <Route path='/newofficer' element={
                //<RequireAuth>
                    <NewOfficer />
                //</RequireAuth>
                } />
            </Routes>
            <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;