'use client';
import Link from 'next/link';
import { SiMicrosoftedge } from 'react-icons/si';
import style from './navbar.module.css';
function Footer() {
  return (
    <>
      <footer className={`body-font bg-light-green text-dark-green`}>
        <div className="px-5 py-16 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                Services
              </h2>
              <nav className="list-none mb-10 cursor-pointer">
                <li>
                  <a className="text-dark-green hover:text-gray-800 ">
                    Hardware
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800 ">
                    Software
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800 ">
                    Design
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800 ">
                    Netwoking
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                Popular Devices
              </h2>
              <nav className="list-none mb-10 cursor-pointer">
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                    Arduino
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                    Raspberrypi
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                    Lora WAN
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                  NVIDIA Jetson Nano
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                About Freemepado
              </h2>
              <nav className="list-none mb-10 cursor-pointer">
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                    YouTube
                  </a>
                </li>
                <li>
                  <a className="text-dark-green hover:text-gray-800">
                    X
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-text-light-green tracking-widest text-sm mb-3">
              Subscribe to our newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  {/* <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    
                  </label> */}
                  <input
                    
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder='you@domain.com'
                    className="w-full items-center text-[12px] bg-gray-100 bg-opacity-50 rounded border border-light-green focus:bg-transparent focus:ring-2 focus:ring-light-green focus:border-dark-green text-base outline-none text-dark-green py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 mt-4 xl:mt-0 flex-shrink-0 inline-flex bg-dark-green text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
              <p className="text-dark-green text-sm mt-2 md:text-left text-center">
              Stay updated on new releases and 
              </p>
              <p className="text-dark-green text-sm md:text-left text-center">
              features, guides, and case studies.
              </p>
            </div>
          </div>
          <h4 className='heading  text-2xl font-bold'>
                  Contributores :
                </h4>
                

        </div>
        <div className="bg-gray-100">
          <div className="px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <SiMicrosoftedge style={{ fontSize: '2rem', color: '#009385' }} />
              <span
                className={`ml-3 ${style.logostyle}`}
                style={{ fontFamily: 'Ubuntu' }}
              >
                logo name
              </span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
