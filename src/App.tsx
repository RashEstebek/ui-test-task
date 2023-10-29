import "./styles/main.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"
import Movie from "./pages/Movie"
import Booking from "./pages/Booking"
import Halls from "./pages/Halls"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/movie" element={<Movie />}></Route>
                    <Route path="/booking" element={<Booking />}></Route>
                    <Route path="/halls" element={<Halls />}></Route>
                </Routes>


                <Footer />
            </Router>
        </div>
    )
}

export default App