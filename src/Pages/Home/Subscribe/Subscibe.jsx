import {
    Link,
  } from "react-router-dom";
const Subscibe = () => {
    return (
        <div className="bg-gray-900 flex justify-around items-center h-[400px]">
            <div className="text-center pe-5 border-r-2 w-[50%] px-20">
                <h2>Our delivery partner</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et beatae aliquam. Aperiam, dolor aliquam.</p>
                <p className="underline pt-10"><Link>View More</Link></p>
            </div>
            <div className="text-center w-[50%]">
                <h2 className="uppercase text-xl mb-5">subscribe to our newsletter</h2>
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="Email" />
                    <button className="btn join-item rounded-r-full">Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default Subscibe;