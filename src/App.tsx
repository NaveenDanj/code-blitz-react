import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/App/Home';


function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App
