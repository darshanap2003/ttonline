import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import Homepage from "./pages/Homepage"
import PetitionPage from "./pages/PetitionPage"

import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/maps" element={<Homepage />} exact />
          <Route path="/petitions" element={<PetitionPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
