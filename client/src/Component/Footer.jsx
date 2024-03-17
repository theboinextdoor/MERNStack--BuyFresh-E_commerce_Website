import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import {Link} from "react-router-dom"
import toast from "react-hot-toast";
import buyfreshlogo from "../assest/buyFreshlogo.png"






const Footer = () => {

    const handleNotYetAddedSection = () => {
        toast.success("Item is yet to add")
    }
    return (
        <footer>
            <div className="p-10 bg-gray-800 text-gray-200">
                <div className="max-w-7xl mx-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
                        <div className="mb-5 ">
                            <img src={buyfreshlogo} alt=""className="md:w-40 md:h-20" />
                           
                            <p className="text-gray-500">
                                Electronic City, Bengaluru <br />
                                Karanatka, 560100  <br />
                                <strong>Phone: </strong> +91- 821 0111 482  <br />
                                <strong>Email: </strong> farazashraf1523@gmail.com<br />
                            </p>
                        </div>
                        <div className="mb-5 ">
                            <h4 className="pb-4">Useful Links</h4>
                            <ul className="text-gray-500 " onClick={() => window.scrollTo({top: 0 , behavior : 'smooth'})}>
                                <Link to={'/'}><li className="pb-4"><a href="/" className="hover:text-yellow-500" >Home</a></li></Link>
                                {/* <Link to={'../Pages/Menu.jsx'}><li className="pb-4"><a href="" className="hover:text-yellow-500">Menu</a></li></Link> */}
                                <li className="pb-4 cursor-pointer" onClick={handleNotYetAddedSection}>New Arrivals</li>
                               <Link to={'/cart'}> <li className="pb-4"><a href="/cart" className="hover:text-yellow-500" >Cart</a></li></Link>
                            </ul>
                        </div>
                        <div className="mb-5 ">
                            <h4 className="pb-4">Things yet to come</h4>
                            <ul className="text-gray-500 cursor-pointer" onClick={handleNotYetAddedSection}>
                                <li className="pb-4  hover:text-yellow-500">Grocery</li>
                                <li className="pb-4 hover:text-yellow-500">Dairy Products</li>
                                <li className="pb-4 hover:text-yellow-500">Kitchen Utility</li>
                                <li className="pb-4 hover:text-yellow-500">Medicines</li>
                                <li className="pb-4 hover:text-yellow-500">More</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div>
                    <div className="text-center">
                        <div className="tracking-widest">
                            Copyright<strong><span className="text-red-500">&copy; BuyFresh</span></strong>. All Right Reserved
                        </div>
                        <div className="tracking-widest">
                            Designed by <span className="text-yellow-500">Faraaz Ashraf</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center text-center py-2 justify-center text-yellow-500">
                        <a href="mailto:farazashraf1523@gmail.com" className="text-2xl hover:text-yellow-400 active:text-yellow-600" target="_blank"><SiGmail /></a>
                        <a href="https://github.com/theboinextdoor" className="text-2xl hover:text-yellow-400 active:text-yellow-600" target="_blank"><IoLogoGithub /></a>
                        <a href="https://www.linkedin.com/in/faraaz-ashraf-831796204/" className="text-2xl hover:text-yellow-400 active:text-yellow-600" target="_blank"><FaLinkedin /></a>
                        <a href="https://leetcode.com/damon_23/" className="text-2xl hover:text-yellow-400 active:text-yellow-600" target="_blank"><SiLeetcode /></a>
                    </div>
                </div>

            </div>
        </footer>




    )
}

export default Footer