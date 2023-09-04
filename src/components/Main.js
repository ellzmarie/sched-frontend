import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/contact/:id" element={<Show />} />
      </Routes>
  </main>
  )
}

export default Main