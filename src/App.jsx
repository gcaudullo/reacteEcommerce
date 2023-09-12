import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';


function App() {
  return (
    < BrowserRouter>
      < NavBar />
      <Routes>
        <Route path="/" element={< ItemListContainer />} />
        <Route path="/item/:id" element={< ItemDetailContainer />} />
        <Route path="/category/:id" element={< ItemListContainer />} />
        <Route path="/nosotros" element={< Nosotros />} />
        <Route path="/contacto" element={< Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
