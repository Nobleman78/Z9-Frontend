import { Helmet } from "react-helmet-async";
import HeroSection from "../../Layout/HeroSection";
import Benefits from "../../Section/Benefits";
import Domestic from "../../Section/Domestic";
import InternationalPackage from "../../Section/InternationalPackage";
import OurServices from "../../Section/OurServices";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Home | Z9 Air Travels</title>
                <meta
                    name="description"
                    content="Z9 Air Travels offers the best travel services including domestic & international tour packages, visa assistance, and flight booking."
                />
                <meta
                    name="keywords"
                    content="travel agency, air tickets, visa services, domestic tours, international tours, Z9 Air Travels"
                />
                <link rel="canonical" href="https://www.z9airtravels.com/" />

                {/* Open Graph */}
                <meta property="og:title" content="Home | Z9 Air Travels" />
                <meta
                    property="og:description"
                    content="Experience hassle-free travel with Z9 Air Travels. Explore our domestic and international packages, visa support, and flight booking services."
                />
                <meta property="og:url" content="https://www.z9airtravels.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.z9airtravels.com/images/home-og.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Home | Z9 Air Travels" />
                <meta
                    name="twitter:description"
                    content="Explore domestic & international travel packages, visa assistance, and flight booking with Z9 Air Travels."
                />
                <meta name="twitter:image" content="https://www.z9airtravels.com/images/home-og.jpg" />
            </Helmet>

            <main>
                <HeroSection />
                <OurServices />
                <InternationalPackage />
                <Domestic />
                <Benefits />
            </main>
        </div>
    );
};

export default Home;
