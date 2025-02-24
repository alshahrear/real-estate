import { useContext } from "react";
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import Estates from "../Estates/Estates";
import Testimonials from "../Testimonials/Testimonials";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";




const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Real Estate | Home</title>
            </Helmet>
           <Banner></Banner>
           <Estates></Estates>
           {user && <Testimonials></Testimonials>}
           <Contact></Contact>
        </div>
    );
};

export default Home;