import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import PetitionPage from "./pages/PetitionPage"

import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/petitions" element={<PetitionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
