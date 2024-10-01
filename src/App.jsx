import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/page/home'
import SiteNav from './components/nav/site-nav'
import ImplementationEvents from './components/page/home/Implementation-events'
import EventTypes from './components/page/events'
import FooterSite from './components/nav/footer-site'

function App() {
  return (
    <BrowserRouter>
     <header className=''>
      <SiteNav />
     </header>
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/implementation' element={<ImplementationEvents />}/>
        <Route path='/event' element={<EventTypes />}/>
     </Routes>
     <div className=' h-12'/>
    <FooterSite />
    </BrowserRouter>
  )
}

export default App
