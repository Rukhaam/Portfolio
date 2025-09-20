import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/home-page"
import NotFound from "./pages/Not-found"
    

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route index element = {<Home></Home>}/>
      <Route path= "*" element= {<NotFound></NotFound>}/>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
