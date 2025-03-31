import LinkSocialMedia from "./subComponents/LinkSocialMedia";
import { socialMediaLinks } from '../data';
import { menuList } from "../data";
import { Link } from "react-scroll";

function LinkItemMenu ({ item }) {
    return (
        <Link
            to={item.name.toLowerCase()}
            smooth={true}
            duration={500}
            className="inline-block px-4 py-2 font-normal text-black transition hover:text-green-400 dark:text-slate-100"
        >
            {item.name}
        </Link>
    );
}

function Footer() {
  return (
        <footer className="block bg-slate-100 dark:bg-slate-800">
            {/* Container */}
            <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                {/* Component */}
                <div className="flex-col flex items-center">
                    <a href="#" className="mb-8 inline-block max-w-full text-black dark:text-slate-100">
                        <p className="font-bold text-xl">Portfolio</p>
                    </a>
                    <div className="text-center font-semibold">
                        {menuList.map((item, index) => (
                            <LinkItemMenu
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>

                    <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>

                    <div className="mb-12 flex gap-4 mx-auto">
                        {socialMediaLinks.map((social, index) => (
                            <LinkSocialMedia key={index} href={social.href} iconName={social.iconName} className={social.className} />
                        ))}
                    </div>
                    <p className="text-sm sm:text-base dark:text-slate-100">
                        © Copyright {new Date().getFullYear()}. Jufron Tamo Ama.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
