import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Navbar } from "./componentes/Navbar"
import { Home, About, Projects } from "./pages"
import { Contact } from "./pages/Contact"


function App() {


  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </Router>

    </main>
  )
}

export default App
