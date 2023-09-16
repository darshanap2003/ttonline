import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
