import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
    return (
        <div>
            <footer className="flex justify-evenly footer bg-[#191a1f]  text-white p-10">
                <aside>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Elite Estates</h2>
                        <p>Providing reliable tech since 1992 and still develop.</p>
                        <p className="flex items-center hover:link"><span className="mr-2"><MdOutlineMail></MdOutlineMail></span> elite@eliteInfo.com</p>
                        <p className="flex items-center hover:link"><span className="mr-2"><FaPhone></FaPhone></span> +88 01612002913</p>
                        <div className="flex items-center text-xl">
                            <Link className="mr-2"><FaFacebook></FaFacebook></Link>
                            <Link className="mr-2"><BsInstagram></BsInstagram></Link>
                            <Link className="mr-2"><FaXTwitter></FaXTwitter></Link>
                            <Link className="mr-2"><IoLogoYoutube></IoLogoYoutube></Link>
                            <Link className="mr-2"><IoLogoLinkedin></IoLogoLinkedin></Link>
                        </div>
                    </div>
                </aside>
                <nav className="space-y-2">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="space-y-2">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="space-y-2">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer bg-[#101115] flex py-5 justify-center items-center">
                <aside className="">
                    <p className="text-xl text-white font-medium">Copyright © {new Date().getFullYear()} by <span className="text-[#eb6327]">Elite</span>  - All right reserved </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;