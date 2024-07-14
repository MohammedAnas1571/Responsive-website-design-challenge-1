import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 text-white">
            <h1 className="w-full text-[#00df9a] text-3xl">REACT.</h1>

            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>

            <div className="block md:hidden" onClick={handleNav}>
                {!nav ? <IoMenu size={20} /> : <MdOutlineClose size={20} />}
            </div>

            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 ease-in-out duration-500" : "fixed left-[-100%] "}>
                <h1 className="w-full text-[#00df9a] text-3xl m-4">REACT.</h1>
                <ul>
                    <li className="p-4 border-b border-b-gray-500">Home</li>
                    <li className="p-4 border-b border-b-gray-500">Company</li>
                    <li className="p-4 border-b border-b-gray-500">Resource</li>
                    <li className="p-4 border-b border-b-gray-500">About</li>
                    <li className="p-4 border-b border-b-gray-500">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
