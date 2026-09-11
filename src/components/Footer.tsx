import React from "react";
import footerlogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className=" container mx-auto bg-white mt-16">
      {/* //!upper part */}
      <div className="container mx-auto px-4 py-12 flex justify-between">
        {/* //!logo part */}
        <div>
          <img src={footerlogo} alt="Dev Stack" />
          <p className="text-slate-400 mt-4 leading-7">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 mt-5 font-semibold">
            <a href="#" className="hover:text-gray-600">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-600">
              Twiter
            </a>
            <a href="#" className="hover:text-gray-600">
              Linkedin
            </a>
          </div>
        </div>
        {/* //!product */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Product</h3>
          <ul className="space-y-3 text-slate-400">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Projects
              </a>
            </li>
          </ul>
        </div>
        {/* //!company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-3 text-slate-400">
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Careers
              </a>
            </li>
          </ul>
        </div>
        {/* //!Legal */}
        <div className="">
          <h3 className="font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-3 text-slate-400">
            <li>
              <a href="" className="hover:text-black">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* //!copyright */}
      <div className="flex justify-between text-slate-400 py-4">
        <div>
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
        <div className="flex justify-between item-center gap-4" >
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
