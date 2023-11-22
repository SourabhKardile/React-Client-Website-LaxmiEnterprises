import './App.css';
import ContactUs from './Components/ContactUs';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './Components/NavbarComponent';
import Product from './Components/Products/Product';
function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
      <Routes>
        <Route path="/" element={ <Main />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/product' element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
