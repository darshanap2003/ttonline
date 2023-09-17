import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"


function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Landing/>} exact/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
