import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ItemCount from './components/productList/ItemCount';
import ItemListContainer from "./components/productList/ItemListContainer";

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer />
    <Footer />
    </>
  );
}

export default App;
