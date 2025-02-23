import { LuPhoneCall } from "react-icons/lu";
import { AiTwotoneMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { TbClockHour2 } from "react-icons/tb";


const Contact = () => {
    return (
        <div className="flex  w-[1200px] mx-auto mt-5 mb-16">
            <div className="space-y-10 flex-1">
                <h2 className="text-4xl font-semibold">Contact Us</h2>
                <p className="text-gray-700 -mt-5">Feel free to contact us for any inquiries, suggestions, or support. Our team is always ready to assist you and ensure you receive the best service tailored to your needs. We value your communication and look forward to hearing from you soon.</p>
                <div className="flex">
                    <div className="flex items-center">
                        <div><LuPhoneCall className="text-4xl"></LuPhoneCall></div>
                        <div className=" ml-5">
                            <p className="text-lg text-orange-600 font-semibold">Phone</p>
                            <p className="font-medium">+8801612002913</p>
                        </div>
                    </div>
                    <div className="flex items-center ml-36">
                        <div><AiTwotoneMail className="text-4xl"></AiTwotoneMail></div>
                        <div className="ml-5">
                            <p className="text-lg text-orange-600 font-semibold">Contact Mail</p>
                            <p className="font-medium">alshahrear1@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* .... */}
                <div className="flex mt-16">
                    <div className="flex items-center">
                        <div><SlLocationPin className="text-4xl"></SlLocationPin></div>
                        <div className="ml-5">
                            <p className="text-lg text-orange-600 font-semibold">Location</p>
                            <p className="font-medium">18/2 Dhanmondi, Dhaka</p>
                        </div>
                    </div>
                    <div className="flex items-center ml-24">
                        <div><TbClockHour2 className="text-4xl"></TbClockHour2></div>
                        <div className="ml-5">
                            <p className="text-lg text-orange-600 font-semibold">Open It</p>
                            <p className="font-medium">Sun-Thu: 8:00 am - 9:00 pm</p>
                        </div>
                    </div>
                </div>
                <p className="text-lg font-medium mt-12">Contact us have a cool projects? <span className="text-orange-600">Get in Touch!</span></p>
            </div>
            {/* form */}
            <div className="flex-1 ml-36">
                <div className="shadow-lg px-8 py-8">
                    <form className="space-y-3">
                        <div>
                            <h3 className="text-3xl  font-semibold">Get in Touch</h3>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Your Name" className="input input-bordered font-medium bg-[#F4F4F4] w-[420px]" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email Address" className="input input-bordered font-medium bg-[#F4F4F4] w-[420px]" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Phone Number" className="input input-bordered font-medium bg-[#F4F4F4] w-[420px]" required />
                        </div>
                        <div>
                            <textarea name="message" placeholder=" Message" cols="50" rows="6" className="border-1 border-gray-300 font-medium bg-[#F4F4F4] rounded-lg" ></textarea>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn text-white hover:bg-amber-500 px-7 bg-[#ed6325]">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;