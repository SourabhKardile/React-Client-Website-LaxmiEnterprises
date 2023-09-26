import './App.css';
import ContactUs from './Components/ContactUs';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './Components/NavbarComponent';
function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
      <Routes>
        <Route path="/" element={ <Main />} />
          <Route path='/contact' element={<ContactUs />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
