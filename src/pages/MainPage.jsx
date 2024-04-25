import FAQSection from "../sections/FAQSection";
import HeroSection from "../sections/HeroSection"
import HowSection from "../sections/HowSection";
import InstructorsSection from "../sections/InstructorsSection";
import StudiosSection from "../sections/StudiosSection";
import WorkshopsSection from "../sections/WorkshopsSection";
import NavBar from "../components/NavBar"
import FooterSection from "../sections/FooterSection";
import BookingPage from "./BookingPage";

const MainPage = () => {
    return (
        <>

        <HeroSection />
        <HowSection />
        <InstructorsSection />
        {/* <StudiosSection /> */}
        <FAQSection />
        <FooterSection />

        </>

    )
}

export default MainPage;