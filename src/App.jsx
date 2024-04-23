import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import InstructorDetailsPage from './pages/InstructorDetailsPage';



const App = () => {
  

  return (
    <>
    <NavBar />

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/instructor/:instructorId" element={<InstructorDetailsPage />} />
    </Routes>
    </>
  )
}

export default App
