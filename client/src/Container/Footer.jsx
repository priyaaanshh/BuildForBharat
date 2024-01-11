import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto  p-10 flex flex-col md:flex-row justify-between items-center max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-2xl">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">ShopTalk</h2>
          <p className="text-sm">Your go-to online shopping destination</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
