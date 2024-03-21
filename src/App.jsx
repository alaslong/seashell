import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import InstructorsPage from './pages/InstructorsPage';
import InstructorDetailsPage from './pages/InstructorDetailsPage';
import StudiosPage from './pages/StudiosPage';
import WorkshopsPage from './pages/WorkshopsPage';


function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/instructors" element={<InstructorsPage />} />
      <Route path="/instructor/:instructorId" element={<InstructorDetailsPage />} />
      <Route path="/studios" element={<StudiosPage />} />
      <Route path="/workshops" element={<WorkshopsPage />} />

    </Routes>
    </>
  )
}

export default App
