import FAQSection from "../sections/FAQSection";
import HeroSection from "../sections/HeroSection"
import HowSection from "../sections/HowSection";
import InstructorsSection from "../sections/InstructorsSection";
import StudiosSection from "../sections/StudiosSection";
import WorkshopsSection from "../sections/WorkshopsSection";
import NavBar from "../components/NavBar"

const MainPage = () => {
    return (
        <>
        <NavBar />
        
        <HeroSection />
        <HowSection />
        <InstructorsSection />
        {/* <StudiosSection /> */}
        <FAQSection />
        

        </>

    )
}

export default MainPage;