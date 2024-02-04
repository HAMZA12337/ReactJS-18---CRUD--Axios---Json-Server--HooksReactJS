import { useEffect, useState } from "react";
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import NewProduct from "./components/NewProduct";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

const actions = ["Home", "Product", "NewProduct"];
const [getCurrentRoute,setCurrentRoute]=useState();


useEffect(()=>{

 let path=window.location.pathname;
 path=path.slice(1,path.length)
 setCurrentRoute(path)
 
})

  return (
<BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>HB</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {actions.map((action)=>(

                  <li key={action} 
                  
                  onClick={()=>setCurrentRoute(action)}

                  className="nav-item">
                    <Link className={
                      getCurrentRoute===action ? "nav-link text-dark ":"nav-link"
                    }
                    
                    aria-current="page" to={"/"+action}>
                      {action}
                    </Link>
                  </li>

                  ))}
                
                </ul>
            
              </div>
            </div>
          </nav>
          <Routes>

<Route path="/Home" element={<Home/>}> </Route>
<Route path="/Product" element={<Product/>}> </Route>
<Route path="/NewProduct" element={<NewProduct/>}> </Route>
</Routes>
</BrowserRouter>



  );
 
}

export default App;


