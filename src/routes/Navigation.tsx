import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import logo from "../logo.svg";
import { FormikAbstractations, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";
export const Navigation = () => {
  return (
   //el class name es para activar cuando tocamos el boton
   //en navlink pongo los links a navegar
   //en routes van las rutas de los archivos, que se puedne colocar los componentes
   <BrowserRouter>
    
    <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo" />
            <ul>
            
            <li>
                <NavLink to="/register" className={({isActive})=> isActive ? 'nav-active' : ''}>Register Page</NavLink>
            </li>
            <li>
                <NavLink to="/formik-basic" className={({isActive})=> isActive ? 'nav-active' : ''}>Formik Basic</NavLink> 
            </li>
            <li>
                <NavLink to="/formik-yup" className={({isActive})=> isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
            <li>
                <NavLink to="/formik-components" className={({isActive})=> isActive ? 'nav-active' : ''}>Formik Components</NavLink> 
            </li>
            <li>
                <NavLink to="/formik-abstractations" className={({isActive})=> isActive ? 'nav-active' : ''}>Formik Abstractations</NavLink> 
            </li>
        </ul>
        </nav>

    <Routes>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/formik-basic" element={<FormikBasicPage/>}/>
    <Route path="/formik-yup" element={<FormikYupPage/>}/>
    <Route path="/formik-components" element={<FormikComponents/>}/>
    <Route path="/formik-abstractations" element={<FormikAbstractations/>}/>
    <Route path="/*" element={<Navigate to="/" replace/>}/>
    </Routes>

    </div>
    </BrowserRouter>
  )
}
