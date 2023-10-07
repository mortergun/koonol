
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/HomePage/Home'
import Header from './components/shared/Header'
import AboutUs from './components/AboutMe/AboutUs'
import Form from './components/Form/Form'

function App() {

  return (
    <article>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Form />} />
      </Routes>
    </article>
  )
}

export default App
