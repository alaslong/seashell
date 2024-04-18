import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import InstructorsPage from './pages/InstructorsPage';
import InstructorDetailsPage from './pages/InstructorDetailsPage';
import StudiosPage from './pages/StudiosPage';
import HowItWorksPage from './pages/HowItWorksPage';
import WorkshopsPage from './pages/WorkshopsPage';


const App = () => {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/how" element={<HowItWorksPage />} />
      <Route path="/instructors" element={<InstructorsPage />} />
      <Route path="/instructor/:instructorId" element={<InstructorDetailsPage />} />
      <Route path="/studios" element={<StudiosPage />} />
      <Route path="/workshops" element={<WorkshopsPage />} />

    </Routes>
    </>
  )
}

export default App
