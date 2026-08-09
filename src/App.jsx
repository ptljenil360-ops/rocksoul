import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/public/Home.jsx";
import Gallery from "./pages/public/Gallery.jsx";
import Events from "./pages/public/Events.jsx";
import Reservation from "./pages/public/Reservation.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book-a-table" element={<Reservation />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;