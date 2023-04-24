import { Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Another from './pages/Another'

function App() {
  return (
    <Fragment>
      <div className="grid min-h-screen grid-cols-3">
        <div className="bg-white">
          <Header />
        </div>
        <div className="border-x-2 border-x-gray-100 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/another" element={<Another />} />
          </Routes>
        </div>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default App
