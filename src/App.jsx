import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Wifi from './pages/Wifi'
import CCTV from './pages/CCTV'
import Solar from "./pages/Solar";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/wifi" element={<Wifi />} />
                <Route path="/cctv" element={<CCTV />} />
                <Route path="/solar" element={<Solar />} />
            </Routes>
        </Router>
    )
}

export default App
