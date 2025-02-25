import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="py-10 rounded w-[1200px] mx-auto bg-[#ecf9ff]">
                <div className="flex justify-center ">
                    {
                        user.photoURL ?
                        <img className="rounded-full w-[150px] h-[150px] " src={user.photoURL} alt="" /> :
                        <>
                        <div className="skeleton h-32 w-32 shrink-0 rounded-full"></div>
                        </>
                    }
                </div>
                <div className=" ml-20 space-y-4">
                    <h2 className="text-3xl font-semibold">Your Profile</h2>
                    <p className="text-xl font-medium"><span className="text-orange-600">Name :</span> {user.displayName} </p>
                    {
                        user.email?
                        <p className="text-xl font-medium"><span className="text-orange-600">Email :</span> {user.email}</p>:
                        <p className="text-xl font-medium">Email : <span className="text-orange-600">Email not found</span></p>
                    }
                    <p className="text-xl font-medium"><span className="text-orange-600">Join Us : </span>{user.metadata.creationTime}</p>
                    <p className="text-xl font-medium "><span className="text-orange-600">PhotoURL :</span><span className="text-blue-500 hover:link"> {user.photoURL}</span></p>
                    <button className="btn text-white hover:bg-amber-500 bg-orange-600 px-10 py-3 rounded-lg">Save</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;