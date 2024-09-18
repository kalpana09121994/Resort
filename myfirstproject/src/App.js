import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Facility from "./Pages/Facility";
import Gallery from "./Pages/Gallery";
import Dining from "./Pages/Dining";
import Spa from "./Pages/Spa";
import Contact from "./Pages/Contact"
import Overview from './Pages/Overview'; // Example pages
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import Navbar from "./Component/Navbar";
import DiningNavbar from "./Pages/DiningNavbar";





function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Rooms" element={<Rooms/>}/>
        <Route path="/Dining" element={<Dining/>}/>
        <Route path="/Facility" element={<Facility/>}/>
        <Route path="/Spa" element={<Spa/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contact" element={<Contact/>}/>

            <Route path="/Dining/Overview" element={<Overview />} />
            <Route path="/Dining/Menu" element={<Menu />} />
            <Route path="/Dining/Reservations" element={<Reservations />} />

        
            
        </Routes>
        


      </BrowserRouter>
      
    </div>
  )
}

export default App;
