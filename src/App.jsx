import Homepage from "./page/Homepage"
import Login from "./page/Login"
import Register from "./page/Register"
import Test from "./page/Test"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/start" element={<Test />} />
        </Routes>
      </Router>
    </>
  )
}

export default App