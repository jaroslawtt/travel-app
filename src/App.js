import './styles/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Trip from "./components/Trip";
import SignIn from "./components/Sign-In";
import SignUp from "./components/Sign-Up";
import BookingsList from "./components/BookingsList";
function App() {
  return (
    <div className="App">
        <Header></Header>
        <BrowserRouter>
                <Routes>
                    <Route path="/trip/:tripId" element={<Trip/>}/>
                    <Route path="/sign-in" element={<SignIn />}/>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/booking" element={<BookingsList/>}/>
                    <Route path="/*" element={<Main/>}/>
                </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </div>
  );
}

export default App;
