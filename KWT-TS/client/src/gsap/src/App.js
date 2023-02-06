import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Index from './components';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Form from './components/form';


import Audi from './components/audi';
import Bmw from './components/bmw';
import Mercedes from './components/mercedes.jsx';

// CSS
import "./styles/header.css"
import "./styles/navbar.css"
import "./styles/footer.css"
import "./styles/index.css"

//FONTELLO
import "./fontello/css/fontello.css"

document.title = "Projekt"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="/" element={<Index />} />
						<Route path="/bmw" element={<Bmw />} />
						<Route path="/mercedes" element={<Mercedes />} />
						<Route path="/audi" element={<Audi />} />
      </Routes>
      <Form />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;