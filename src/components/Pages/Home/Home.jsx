import HeroSection from "../../Layout/HeroSection";
import Benefits from "../../Section/Benefits";
import Domestic from "../../Section/Domestic";
import InternationalPackage from "../../Section/InternationalPackage";
import OurServices from "../../Section/OurServices";
const Home = () => {
   
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <OurServices />
            <InternationalPackage />
            <Domestic />
            <Benefits />
        </div>
    );
};

export default Home;