import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import PetitionPage from "./pages/PetitionPage"
import About from "./pages/About"
import Homepage from "./pages/Homepage"
import Resources from "./pages/Resources"
import PetitionDetails from "./components/PetitionDetails"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/maps" element={<Homepage />} exact />
          <Route path="/petition" element={<PetitionPage />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/resources" element={<Resources />} exact />
          <Route path="/petition/:id" element={<PetitionDetails/>} exact/>
          <Route path="/profile" element={<Profile />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
