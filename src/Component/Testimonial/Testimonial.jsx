const Testimonial = ({ testimonial }) => {
    const { name, designation, message, img } = testimonial;

    return (
        <div className="w-96">
            <div className="card bg-base-100 shadow-xl h-full flex flex-col min-h-[200px] mr-10">
                <div className="card-body flex-grow">
                    <div className="flex items-center">
                        <div>
                            <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover" />
                        </div>
                        <div className="ml-3">
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <p className=" text-gray-500">{designation}, <span className="text-orange-600">Elite</span></p>
                        </div>
                    </div>
                    <div className="pt-3 flex-grow">
                        <p className="font-medium">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
