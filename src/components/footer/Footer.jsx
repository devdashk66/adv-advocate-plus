// components/Footer.js
import Link from "next/link";
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Home</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Practice Area
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Attorneys
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Terms
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Practice Area</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Banking Law
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Commercial Law
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Corporate Law
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Family Law
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Media Law
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Services</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Labor Law
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Employment
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Property Law
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-default">
                  Prosecution
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="font-bold text-lg mb-4">Contact</h5>
            <p className="mb-2">2569 Maple Avenue Stockton, CA 95204</p>
            <p className="mb-2">+1(123)-456-7890</p>
            <p className="mb-2">+1(123)-456-7890</p>
            <p className="mb-6">me@domain.com</p>
            <h5 className="font-bold text-lg mb-4">Connect</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-default hover:scale-110 duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-default hover:scale-110 duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-default hover:scale-110 duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-default hover:scale-110 duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-default hover:scale-110 duration-300">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-default hover:scale-110 duration-300">
                <FaDribbble size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm">
            &copy; 2024 All rights reserved | This template is made with{" "}
            <span className="text-red-500">❤</span> by{" "}
            <Link
              className="text-default font-bold"
              target="_blank"
              href="https://github.com/devdashk66"
            >
              Dev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
