import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";


const Footer = () => {
    return (
        <>
            <div className="bg-slate-600 text-white  flex gap-4 justify-between m-auto px-6 py-4  items-center ">

                {/* Logo and Home button */}
                {/* <div className="cursor-pointer w-full max-w-32 ml-10">
                <div><img src={logo}  /></div>
            </div> */}

                {/* details about me  */}
                <div className=" flex flex-col gap-2 font-semibold">
                    <p>Electronic City </p>
                    <p>Bengauru, Karnataka</p>
                    <p>560100</p>
                </div>

                <div className="bg-slate-500 rounded-lg items-center flex justify-center font-semibold md:text-xl p-2">
                <p>Copyright &copy; 2022 , Designed bt <span className="text-red-400">Faraaz Ashraf</span> </p>
            </div>

                {/* my socials  */}
                <div className="flex gap-6 p-2 md:text-2xl cursor-pointer ">
                    <SiGmail className=" active:text-cyan-600 hover:text-cyan-200"  />
                    <IoLogoGithub className=" active:text-cyan-600 hover:text-cyan-200"  />
                    <FaLinkedin className=" active:text-cyan-600 hover:text-cyan-200"  />
                    <SiLeetcode className=" active:text-cyan-600 hover:text-cyan-200" />
                </div>


                {/* my Name and copyright sign  */}

            </div>
            
        </>




    )
}

export default Footer