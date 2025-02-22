import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

// import { Link } from "react-router-dom";


const GoogleLogin = () => {
    return (
        <div className="flex justify-center">
            <div className="">
                <div className="flex items-center my-4">
                    <div className="flex-1 h-[1px] bg-gray-400"></div>
                    <span className="px-3 font-medium text-gray-600">Or</span>
                    <div className="flex-1 h-[1px] bg-gray-400"></div>
                </div>
                <button className="btn  px-[110px] rounded-2xl bg-white text-black"><span><FcGoogle></FcGoogle></span>Continue With Google</button> <br />
                <button className="btn px-[110px] rounded-2xl bg-white text-black mt-2"><span><SiGithub></SiGithub></span> Continue With Github</button>
            </div>
            
        </div>
    );
};

export default GoogleLogin;