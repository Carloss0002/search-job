import Home from "../page/Home";
import Details from "../page/Details";


import { Routes, Route } from "react-router-dom";


export default function Rotas(){
      return(
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      )
}