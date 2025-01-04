import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import Home from './pages/App/Home';


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
