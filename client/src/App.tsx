import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Library from './pages/Library'
import Events from './pages/Events'
import StudentDashboard from './pages/StudentDashboard'
import FacultyDashboard from './pages/FacultyDashboard'

// Pages to be implemented
import About from './pages/About'
import Departments from './pages/Departments'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="departments" element={<Departments />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="library" element={<Library />} />
        <Route path="events" element={<Events />} />
        <Route path="student-dashboard" element={<StudentDashboard />} />
        <Route path="faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App 