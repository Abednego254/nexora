import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Wifi from './pages/Wifi';
import CCTV from './pages/CCTV';
import Solar from './pages/Solar';
import Basic from './pages/Basic';
import Standard from './pages/Standard';
import Premium from './pages/Premium';
import OurWifi from './pages/OurWifi';
import YourWifi from './pages/YourWifi';
import Prices from './pages/Prices';
import SolarBasic from './pages/SolarBasic';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/wifi" element={<Wifi />} />
                <Route path="/cctv" element={<CCTV />} />
                <Route path="/solar" element={<Solar />} />
                <Route path="/cctv/basic" element={<Basic />} />
                <Route path="/cctv/standard" element={<Standard />} />
                <Route path="/cctv/premium" element={<Premium />} />
                <Route path="/wifi/ourwifi" element={<OurWifi />} />
                <Route path="/wifi/prices" element={<Prices />} />
                <Route path="/wifi/yourwifi" element={<YourWifi />} />
                <Route path="/solar/solarbasic" element={<SolarBasic />} />
            </Routes>
        </Router>
    );
};

export default App;
