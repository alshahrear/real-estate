import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import Estates from "../Estates/Estates";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Estates></Estates>
           <Testimonials></Testimonials>
           <Contact></Contact>
        </div>
    );
};

export default Home;