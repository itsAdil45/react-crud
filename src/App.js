
import './App.css';
import  Menu from './components/recipies/Menu'
import ItemDetails from './components/recipies/ItemDetails'
import RecipiesForm from './components/recipies/RecipiesForm'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul id="menu">
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
           <Route path="/products/create" element={<ProductForm />} />
          <Route path="/products/edit/:id" element={<ProductForm />} />
          <Route path="/products/details/:id" element={<ProductDetails />} /> */}
          <Route path="/recipies/details/:id" element={<ItemDetails />} />
          <Route path="/recipies/edit/:id" element={<RecipiesForm />} />
          <Route path="/" element={< Menu />} />
          <Route path="/recipies/create" element={<RecipiesForm />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
