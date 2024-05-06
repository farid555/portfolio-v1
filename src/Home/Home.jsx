import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import Experiences from "../components/Experiences/Experiences";
import Achievements from "../components/Achievements/Achievements";
import ProfSummery from "../components/ProfessionalSummery/ProfessionalSummery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <ProfSummery></ProfSummery>
      <Experiences></Experiences>
      <Achievements></Achievements>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
