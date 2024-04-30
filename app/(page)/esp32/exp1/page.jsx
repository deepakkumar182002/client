'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaLink } from 'react-icons/fa6';
import { FaClipboardCheck } from 'react-icons/fa6';

import Footer from '@/components/Footer';
function Exp1() {
  const [open, setOpen] = useState(true);
  // const [activeExp, setActiveExp] = useState(1)
  // const [activeLink, setActiveLink] = useState('')
  const [copyText, setCopyText] = useState(`// Define the pin number for the LED
  int ledPin = 13;
  
  void setup() {
    // Set the LED pin as an output
    pinMode(ledPin, OUTPUT);
  }
  
  void loop() {
    // Turn the LED on (HIGH)
    digitalWrite(ledPin, HIGH);
    delay(1000); // Wait for 1 second
  
    // Turn the LED off (LOW)
    digitalWrite(ledPin, LOW);
    delay(1000); // Wait for 1 second
  }
  `);
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    var icon = document.getElementById('clipboardIcon');

    // Change the color to your desired color
    icon.style.color = '#3CAEA3'; // For example, change to red color
    icon.style.filter = 'drop-shadow(5px 5px 10px #3CAEA3)'; // For example, change to red color

    // Revert the color after 3 seconds
    setTimeout(function () {
      icon.style.color = ''; // Revert to default color (or any other color you want)
    }, 3000);
  };

  return (
    <>
      <div
        className={`w-full exp_container flex overflow-hidden h-screen`}
        style={{ height: '550px' }}
      >
        <aside
          id="default-sidebar"
          class={` h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white text-black`}
          aria-label="Sidebar"
        >
          <div
            class={`p-2 ${open ? 'w-12' : 'w-64'} ${open ? 'md:w-64' : 'md:w-12'} duration-300  h-full px-3 py-4 overflow-y-auto`}
          >
            <ul class="space-y-2 font-medium">
              <li>
                <button
                  data-drawer-target="default-sidebar"
                  onClick={() => setOpen(!open)}
                  data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 mt-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
              </li>
              <li>
                <Link
                  href="/arduino/exp1"
                  class="flex items-center p-2 hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-light-green focus:text-dark-green active:text-dark-green outline-none group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 transition duration-75 focus:text-dark-green dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap ">
                    LED with Arduino
                  </span>
                  {/* <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </Link>
              </li>
              <li>
                <Link
                  href="/arduino/exp2"
                  class="flex items-center p-2 hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-light-green focus:text-dark-green active:text-dark-green outline-none group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 transition duration-75 focus:text-dark-green dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap ">
                    Servo with arduino
                  </span>
                  {/* <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div class="p-2 bg-white z-20 text-black">
          <div class="p-1 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <section
              className="w-full h-screen ml-3 mt-1 p-2 overflow-y-auto overflow-x-hidden scroll-smooth grid lg:grid-row-2 gap-row-4"
              style={{ height: '558px', fontFamily: 'Ubuntu' }}
            >
              <div className=" h-full w-60 m-0 p-0 md:w-full lg:w-full">
                <h2 className="heading text-4xl font-bold flex" id="exp-1">
                  Led With Arduino 🚨
                </h2>
                <p
                  className="p-8 mt-4 text-white bg-dark-green"
                  style={{
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                >
                  Greetings and welcome to this easy-to-follow guide on using an
                  Arduino board to control LEDs. This project provides as a
                  starting point for learning how to communicate with different
                  Arduino sensors and modules. You&apos;ll clear the way for
                  future projects that require more complexity by becoming an
                  expert in LED control.
                </p>

                <h4 className="heading text-3xl font-bold flex mt-8" id="exp-1">
                  Step 1: Components Required{' '}
                  <Link href="#step1">
                    <FaLink
                      className="hover:text-blue-600"
                      style={{ margin: '2px 2px' }}
                    />
                  </Link>
                </h4>

                <table
                  id="component"
                  className="mt-8 ml-0 border-collapse border border-slate-500"
                >
                  <thead id="step1">
                    <tr className="m-8 text-xl">
                      <th className="border p-2 w-80 border-slate-600">
                        Components
                      </th>
                      <th className="border p-2 w-auto border-slate-600">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 border-slate-700">
                        Arduino Board
                      </td>
                      <td className="border p-2 border-slate-700">
                        Microcontroller board used for building digital devices
                        and interactive objects. It contains inputs and outputs
                        for connecting various components.
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-700">LED</td>
                      <td className="border p-2 border-slate-700">
                        Light-emitting diode that emits light when an electric
                        current passes through it. It&apos;s commonly used as an
                        indicator in electronic circuits.
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-700">Resistor</td>
                      <td className="border p-2 border-slate-700">
                        Passive two-terminal electrical component that limits
                        the flow of current in a circuit. It&apos;s used to
                        protect the LED from excessive current, preventing
                        damage.
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-700">
                        Breadboard
                      </td>
                      <td className="border p-2 border-slate-700">
                        Solderless device used for building and testing
                        electronic circuits. It allows components to be easily
                        connected and removed without permanent soldering.
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-700">
                        Jumper Wire
                      </td>
                      <td className="border p-2 border-slate-700">
                        Insulated wires with connectors at each end, used to
                        connect components on a breadboard or to connect
                        components to the Arduino board
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="heading text-3xl font-bold">
                  Step 2: Connect Components
                </h4>

                <ol className="m-8">
                  <li className="m-2">
                    <strong>1. </strong>Connect one leg of the resistor to any
                    digital pin on the Arduino board.
                  </li>
                  <li className="m-2">
                    <strong>2. </strong>Connect the other leg of the resistor to
                    the longer leg{' '}
                    <span
                      style={{
                        backgroundColor: '#3CAEA3',
                        color: 'white',
                        padding: '1px',
                        borderRadius: '4px',
                      }}
                    >
                      anode
                    </span>{' '}
                    of the LED.
                  </li>
                  <li className="m-2">
                    <strong>3. </strong>Connect the shorter leg{' '}
                    <span
                      style={{
                        backgroundColor: '#3CAEA3',
                        color: 'white',
                        padding: '1px',
                        borderRadius: '4px',
                      }}
                    >
                      cathode
                    </span>{' '}
                    of the LED to the ground{' '}
                    <span
                      style={{
                        backgroundColor: '#3CAEA3',
                        color: 'white',
                        padding: '1px',
                        borderRadius: '4px',
                      }}
                    >
                      GND
                    </span>{' '}
                    pin on the Arduino board.
                  </li>
                </ol>

                <h4 className="heading  text-3xl font-bold">
                  Step 3: Write the Code
                </h4>
                <div
                  id="s"
                  className="mt-8 ml-0 clipboard w-60 md:w-96 flex bg-light-green"
                  style={{
                    height: '650px',
                    borderRadius: '10px',
                    padding: '10px',
                  }}
                >
                  <textarea
                    className="w-96 bg-transparent outline-none py-1 px-3 text-dark-green overflow-hidden"
                    value={copyText}
                    readOnly
                    onChange={e => setCopyText(e.target.value)}
                  />
                  <FaClipboardCheck
                    className="text-white"
                    id="clipboardIcon"
                    size={30}
                    style={{ margin: '5px', cursor: 'pointer' }}
                    onClick={handleCopy}
                  />
                </div>
                <h4 className="heading  text-3xl font-bold">
                  Step 4: Explanation:
                </h4>
                <p className="mt-6 ml-0">
                  We set the ledPin&apos;s pinMode to OUTPUT in the setup
                  function, indicating that signals will be sent from this pin
                  to operate an external device. The LED is turned on in the
                  loop function by using digitalWrite to set the ledPin to HIGH
                  and the delay function to wait a second.
                </p>

                <h4 className="heading  text-3xl font-bold">
                  Step 5: Putting the Code Online::
                </h4>
                <ol className="m-6">
                  <li className="m-2">
                    <strong>1. </strong>Use a USB cable to link your Arduino
                    board to your PC.
                  </li>
                  <li className="m-2">
                    <strong>2. </strong>Launch the Integrated Development
                    Environment (IDE) for Arduino.
                  </li>
                  <li className="m-2">
                    <strong>3. </strong>In the IDE, copy and paste the code.
                  </li>
                  <li className="m-2">
                    <strong>4. </strong>Click the &quot;Tools&quot; menu and
                    choose the proper board and port.
                  </li>
                  <li className="m-2">
                    <strong>5. </strong>In order to upload the code to your
                    Arduino board, click the &quot;Upload&quot; button.
                  </li>
                </ol>

                <h4 className="heading  text-3xl font-bold">
                  Step 6: Testing:
                </h4>
                <p className="m-6">
                  The LED on pin 13 should blink on and off every one second
                  when the code has been uploaded successfully.
                </p>
              </div>

              <div className="md:w-full lg:w-80 w-auto h-auto flex flex-wrap mr-4 md:p-4">
                <div
                  className="text-white rounded-lg p-4 flex flex-col md:ml-auto w-full"
                  style={{ backgroundColor: '#3CAEA3' }}
                >
                  <h2 className="text-lg mb-1 font-medium title-font">
                    Feedback
                  </h2>
                  <p className="leading-relaxed mb-5">
                    Post-ironic portland shabby chic echo park, banjo fashion
                    axe
                  </p>
                  <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-light-green focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-dark-green focus:border-dark-green focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <button className="text-white bg-light-green border-0 py-2 px-6 focus:outline-none hover:bg-bg-dark-green rounded text-lg">
                    Button
                  </button>
                  <p className="text-xsmt-3">
                    Chicharrones blog helvetica normcore iceland tousled brook
                    viral artisan.
                  </p>
                </div>
              </div>

              <div className="lg:col-start-1 lg:col-span-2 mt-6">
                <Footer />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exp1;
