import Link from 'next/link';
import { SiArduino } from 'react-icons/si';
import { SiDrone } from 'react-icons/si';
import { MdOutlineCamera } from 'react-icons/md';
import { MdDeviceHub } from 'react-icons/md';
import { MdOutlinePictureInPictureAlt } from 'react-icons/md';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { GrWifi } from 'react-icons/gr';
import { TbAlignBoxTopLeftFilled } from 'react-icons/tb';
function CouresesNav() {
  return (
    <>
      {/* <div className='mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center bg-dark-green'> */}
      {/* <nav className='flex smm:text-nowrap smm:flex-row smm:overflow-x-auto smm:h-auto smm:w-full items-center text-base justify-start lg:flex-wrap '> */}
      <nav className="flex text-nowrap flex-row overflow-x-auto h-auto w-full items-center text-base justify-start lg:flex-wrap bg-dark-green text-white p-1">
        <Link
          href="/arduino"
          className="mr-5 rounded-md  hover:opacity-50 flex"
        >
          <SiArduino className="m-1" style={{ fontSize: '1.8rem' }} />
          <span className="m-1"> Arduino |</span>
        </Link>
        <Link
          href="/arduinonano"
          className="mr-5 rounded-md  hover:opacity-50 flex"
        >
          <SiArduino className="m-1" style={{ fontSize: '1.8rem' }} />
          <span className="m-1"> Arduino Nano |</span>
        </Link>
        <Link href="/esp32" className="mr-5 rounded-md  hover:opacity-50 flex">
          <TbAlignBoxTopLeftFilled
            className="m-1"
            style={{ fontSize: '1.8rem' }}
          />
          <span className="m-1"> ESP32 |</span>
        </Link>
        <Link
          href="/esp32cam"
          className="mr-5 rounded-md  hover:opacity-50 flex"
        >
          <MdOutlineCamera className="m-1" style={{ fontSize: '1.8rem' }} />
          <span className="m-1"> ESP32-CAM|</span>
        </Link>
        <Link
          href="/esp8266"
          className="mr-5 rounded-md  hover:opacity-50 flex"
        >
          <MdDeviceHub className="m-1" style={{ fontSize: '1.8rem' }} />
          <span className="m-1"> ESP8266 |</span>
        </Link>
        <Link
          href="/respberrypi"
          className="mr-5 rounded-md  hover:opacity-50 flex"
        >
          <MdOutlinePictureInPictureAlt
            className="m-1"
            style={{ fontSize: '1.8rem' }}
          />
          <span className="m-1">Raspberry Pi |</span>
        </Link>
        <Link href="/drone" className="mr-5 rounded-md  hover:opacity-50 flex">
          <SiDrone className="m-1" style={{ fontSize: '1.8rem' }} />
          <span className="m-1"> Drone |</span>
        </Link>
        <Link
          href="/3ddesign"
          className="mr-5 rounded-md  hover:opacity-50 flex"
        >
          <AiOutlineCodeSandbox
            className="m-1"
            style={{ fontSize: '1.8rem' }}
          />
          <span className="m-1"> 3D Design |</span>
        </Link>
        <Link
          href="/lorawan"
          className="mr-2 rounded-md  hover:opacity-50 flex"
        >
          <GrWifi className="m-1" style={{ fontSize: '1.8rem' }} />
          <span className="m-1"> Lora WAN |</span>
        </Link>
      </nav>
      {/* </div> */}
    </>
  );
}

export default CouresesNav;
