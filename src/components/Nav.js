import React ,{useState} from 'react'
import '../Nav.css';
// import { Routes, Route, Router } from "react-router-dom"
import {
  BrowserRouter as Routing,
  Routes,
  Route,
  Link,NavLink 
} from "react-router-dom";
import Layout from './Layout';
import Sample from './Sample';
import NavRoutes from './NavRoutes'




function Nav() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
 

  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-light ">
 
  
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>

  <button className="navbar-toggler" type="button" onClick={handleNavCollapse} data-toggle="collapse" data-target="navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}  id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item ">
        <a className="nav-link" href="test">Store List </a>
      </li>

      <li className="nav-item ">
        <NavLink  className="nav-link" to="/sample">Sample</NavLink >
      </li>
      <li className="nav-item">
        <a className="nav-link" href="test">Tour Locator</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="test">System Pages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="test">Layout Variants</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="test">Tutorials</a>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0 bg-success text-white" type="submit">  <i className="fa fa-plus"> &nbsp;</i>Submit a Tour</button>
    </form>
  </div>
</nav>

{/* <Routes>
    <Route path="/" element={<Layout/>}/>
    <Route path="/sample" element={<Sample/>}/>
  </Routes> */}
  <NavRoutes/>
    </>
  )
}



export default Nav