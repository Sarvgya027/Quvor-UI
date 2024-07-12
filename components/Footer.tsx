import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaMailchimp, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail, MdLocationCity } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-8 md:px-24 lg:px-44">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-primary">About Us</a>
              <a href="#" className="hover:text-primary">Carrier</a>
              <a href="#" className="hover:text-primary">We are hiring</a>
              <a href="#" className="hover:text-primary">Blog</a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-primary">About Us</a>
              <a href="#" className="hover:text-primary">Carrier</a>
              <a href="#" className="hover:text-primary">We are hiring</a>
              <a href="#" className="hover:text-primary">Blog</a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-primary">Business Marketing</a>
              <a href="#" className="hover:text-primary">User Analytic</a>
              <a href="#" className="hover:text-primary">Live Chat</a>
              <a href="#" className="hover:text-primary">Unlimited Support</a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-primary">IOS & Android</a>
              <a href="#" className="hover:text-primary">Watch a Demo</a>
              <a href="#" className="hover:text-primary">Customers</a>
              <a href="#" className="hover:text-primary">API</a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <a href="tel:(480)555-0103" className="flex items-center hover:text-primary">
                <span className="mr-2"><Image src='/contact.svg' alt='contact' height={24} width={24} /></span> (480) 555-0103
              </a>
              <a href="#" className="flex items-center hover:text-blue-600">
                <span className="mr-2"><FaLocationDot className='text-primary h-6 w-6' /></span> 4517 Washington Ave. Manchester, Kentucky 39495
              </a>
              <a href="mailto:debra.holt@example.com" className="flex items-center hover:text-primary">
                <span className="mr-2"><MdEmail className='text-primary h-6 w-6' /></span> debra.holt@example.com
              </a>
            </div>
          </div>  
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Made With Love By Figmaland All Right Reserved
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-primary">
              <FaFacebookF className='text-primary h-6 w-6' />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-primary">
              <FaInstagram className='text-primary h-6 w-6' />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary">
              <FaTwitter className='text-primary h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;