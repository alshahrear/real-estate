import { useState, useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error loading testimonials:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500"><span className="loading loading-spinner loading-lg"></span></p>;
    }

    return (
        <div className="w-[1200px] mx-auto py-6 bg-orange-400 rounded-lg mb-8">
            <h2 className="text-4xl mb-5 text-center font-semibold">What Client Elite Says?</h2>
            <Marquee pauseOnHover speed={50}>
            <div className="flex flex-wrap justify-center">
                {
                    testimonials.map(testimonial => (
                        <Testimonial key={testimonial.id} testimonial={testimonial} />
                    ))
                }
            </div>
            </Marquee>
        </div>
    );
};

export default Testimonials;
