import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Promotions from './pages/Promotions'
import Dining from './pages/Dining'
import Shopping from './pages/Shopping'
import Club from './pages/Club'

function App() {
  return (
    <Router>
      {/* Wrapper đảm bảo footer luôn ở dưới cùng */}
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/club" element={<Club />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
