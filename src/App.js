import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <>
    < NavBar />
    < ItemListContainer greetings="Gracias por preferirnos!" />
    </>
  );
}

export default App;
