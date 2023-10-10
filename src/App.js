import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Recipe from './Components/Recipe';
import Country from './Components/Country';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/recipe' element={<Recipe/>}></Route>
        <Route path='/country' element={<Country/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
