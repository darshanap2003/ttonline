import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import PetitionPage from "./pages/PetitionPage"
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Landing/>} exact/>
        <Route path="/petition" element={<PetitionPage />} exact/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
