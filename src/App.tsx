import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import Home from '@/pages/App/Home';
import ClassicBlitz from '@/pages/App/Game/ClassicBlitz';
import AppLayout from '@/layouts/AppLayout';
import ClassicGameRoom from '@/pages/App/Game/ClassicGameRoom';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/app" element={<AppLayout />}>
            <Route path="" element={<Home />} />
            <Route path="classic-blitz" element={<ClassicBlitz />} />
            <Route path="classic-blitz-room" element={<ClassicGameRoom />} />
          </Route>
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
