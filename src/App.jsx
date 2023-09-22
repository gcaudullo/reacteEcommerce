import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';



function App() {
  return (
    < CartProvider>
      < BrowserRouter>
        < NavBar />
        <Routes>
          <Route path="/" element={< ItemListContainer />} />
          <Route path="/item/:id" element={< ItemDetailContainer />} />
          <Route path="/category/:id" element={< ItemListContainer />} />
          <Route path="/nosotros" element={< Nosotros />} />
          <Route path="/contacto" element={< Contacto />} />
          <Route path="/carrito" element={< Carrito />} />
          <Route path="/checkout" element={< Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
