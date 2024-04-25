import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InstructorDetailsPage from './pages/InstructorDetailsPage';
import BookingPage from './pages/BookingPage';
import NavBar from './components/NavBar';



const App = () => {
  

  return (
    <>
    <NavBar />

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/instructor/:instructorId" element={<InstructorDetailsPage />} />
      <Route path="/book" element={<BookingPage />} />
    </Routes>
    </>
  )
}

export default App
