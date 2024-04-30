'use client';
import Link from 'next/link';
import React from 'react';
import style from './navbar.module.css';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { IoHardwareChip } from 'react-icons/io5';
import { CgMicrosoft } from 'react-icons/cg';
import { GrCodeSandbox } from 'react-icons/gr';
import { TbDrone } from 'react-icons/tb';
import { SiMicrosoftedge } from 'react-icons/si';
import { FaHome } from 'react-icons/fa';
import { IoInvertMode } from 'react-icons/io5';
import { MdContentPasteSearch } from 'react-icons/md';
import { useTheme } from 'next-themes';

function Navbar(props) {
  const { theme, setTheme } = useTheme('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      {/* <header
        className={`text-${props.theme} bg-${props.theme} bg-g body-font ${style.navbar}` }
      > */}
      {/* <div className='mx-auto flex flex-wrap p-3 h-auto w-full 2xl:bg-slate-500 2xl:w-auto 2xl:space-x-0 2xl:flex-wrap items-center'> */}
      <div className="mx-auto flex flex-wrap flex-col p-3 h-auto md:flex-row md:w-auto md:space-x-2 items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <SiMicrosoftedge style={{ fontSize: '2rem', color: '#009385' }} />
          <span className={`ml-3 ${style.logostyle}`}>logo name</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-1 md:border-l md:border-gray-400 flex text-nowrap flex-row overflow-x-auto h-auto w-full items-center text-base justify-start md:flex-nowrap md:w-auto md:mt-1">
          <Link href="/" className=" flex mr-5 duration-100">
            <FaHome className="mx-2" style={{ fontSize: '1.5rem' }} />
            <span>Home</span>
          </Link>
          <Link href="/allcourses" className=" flex mr-5 duration-100">
            <MdOutlineScreenSearchDesktop
              className="mx-2"
              style={{ fontSize: '1.5rem' }}
            />
            <span>Courses</span>
          </Link>
          <Link href="/hardware" className=" flex mr-5 duration-100">
            <IoHardwareChip className="mx-2" style={{ fontSize: '1.5rem' }} />
            <span>Hardware</span>
          </Link>
          <Link href="/software" className=" flex mr-5 duration-100">
            <CgMicrosoft className="mx-2" style={{ fontSize: '1.5rem' }} />
            <span>Software</span>
          </Link>
          <Link href="/design" className=" flex mr-5 duration-100">
            <GrCodeSandbox className="mx-2" style={{ fontSize: '1.5rem' }} />
            <span>Design</span>
          </Link>
          <Link href="/drone" className=" flex mr-5 duration-100">
            <TbDrone className="mx-2" style={{ fontSize: '1.5rem' }} />
            <span>DroneTech</span>
          </Link>
        </nav>

        <div className="flex mt-2 w-auto flex-wrap md:pl-8">
          <div className="flex justify-end items-end leading-7 text-dark-green">
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder="Search courses"
              className={`bg-${props.theme} w-52 md:w-64 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-dark-green focus:border-dark-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            <MdContentPasteSearch
              className={`text-${props.theme}`}
              style={{
                fontSize: '1.6rem',
                position: 'absolute',
                marginBottom: '8px',
                marginRight: '8px',
                cursor: 'pointer',
              }}
            />
          </div>
          <button
            onClick={toggleTheme}
            className={`justify-end px-2 py-1 bg-${props.theme} text-${props.theme} font-medium rounded-lg`}
          >
            <IoInvertMode style={{ fontSize: '2rem' }} />
          </button>
        </div>
      </div>
      {/* </header> */}
    </>
  );
}

export default Navbar;
