import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Partner from './pages/Partner.jsx'
import Demo from './pages/Demos.jsx'
import AddNews from './pages/AddNews.jsx'
import News from './pages/News.jsx'
import Papers from './pages/Papers.jsx'
import Deliverables from './pages/Deliverables.jsx'
import MediaNews from './pages/MediaNews.jsx'
import EventNews from './pages/EventNews.jsx'
import Contact from './pages/Contact.jsx'
import Connexion from './pages/Connexion.jsx'
import Profil from './pages/Profil.jsx'
import './style/App.css'
import './style/home.css'

function App() {
  return (
    <>
        <main>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/partner" element={<Partner/>}/>
            <Route path="/demos" element={<Demo/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/addnews" element={<AddNews/>}/>
            <Route path="/eventnews" element={<EventNews/>}/>
            <Route path="/medianews" element={<MediaNews/>}/>
            <Route path="/papers" element={<Papers/>}/>
            <Route path="/deliverables" element={<Deliverables/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/connexion" element={<Connexion/>}/>
            <Route path="/profil" element={<Profil/>}/>
          </Routes>
        </main>
    </>
  )
}

export default App
