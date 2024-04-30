
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaLink } from 'react-icons/fa6'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Loading from '@/components/Loading'
function ArduinoNano() {
  const [changeId, setChangeId] = useState(1);
  const [expData, setExpData] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Check if localStorage is available before retrieving the value
    const storedId = localStorage.getItem('changeId');
    if (storedId) {
      setChangeId(parseInt(storedId));
    }
  }, []);

  useEffect(() => {
    // Fetch data only if changeId is updated
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/expData/${changeId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setExpData(data))
      .catch(error => console.error('Error fetching expData:', error));
  }, [changeId]);

  const handleIdChange = (newId) => {
    // Update changeId state
    setChangeId(newId);
    // Store changeId in localStorage
    localStorage.setItem('changeId', newId.toString());
  };

  if (!expData) {
    return <Loading />;
  }

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(copyText)
  //   var icon = document.getElementById('clipboardIcon')

  //   // Change the color to your desired color
  //   icon.style.color = '#3CAEA3' // For example, change to red color
  //   icon.style.filter = 'drop-shadow(5px 5px 10px #3CAEA3)' // For example, change to red color

  //   // Revert the color after 3 seconds
  //   setTimeout(function () {
  //     icon.style.color = '' // Revert to default color (or any other color you want)
  //   }, 3000)
  // }

  return (
    <>
      {/* <div key={expData.id} className={`w-full exp_container flex overflow-hidden h-screen`} style={{ height: '550px' }} > */}
      <div key={expData.id} className={`w-screen exp_container flex overflow-y-hidden lg:overflow-y-hidden h-screen`} >
        <aside id='default-sidebar' className={` h-scree transition-transform -translate-x-full sm:translate-x-0 bg-white text-black`} aria-label='Sidebar'>
          <div className={`p-2 ${open ? 'w-12' : 'w-64'} ${open ? 'md:w-64' : 'md:w-12'} duration-300  h-full px-3 py-4 overflow-y-auto`}>
            <ul className='space-y-2 font-medium'>
              <li>
                <button data-drawer-target='default-sidebar' onClick={() => setOpen(!open)} data-drawer-toggle='default-sidebar' aria-controls='default-sidebar' type='button' className='inline-flex items-center p-2 mt-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
                  <svg className='w-4 h-4' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path clipRule='evenodd' fillRule='evenodd' d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
                  </svg>
                </button>

              </li>
              <li>
                <p onClick={() => handleIdChange(1)} className='flex cursor-pointer items-center p-2 hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-light-green focus:text-dark-green active:text-dark-green outline-none group'>
                  <svg className='flex-shrink-0 w-5 h-5 transition duration-75 focus:text-dark-green dark:group-hover:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 18'>
                    <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                  </svg>
                  <span className='flex-1 ms-3 whitespace-nowrap '>LED With Arduino</span>
                </p>
              </li>
              <li>
                <p onClick={() => handleIdChange(2)} className='flex cursor-pointer items-center p-2 hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-light-green focus:text-dark-green active:text-dark-green outline-none group'>
                  <svg className='flex-shrink-0 w-5 h-5 transition duration-75 focus:text-dark-green dark:group-hover:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 18'>
                    <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                  </svg>
                  <span className='flex-1 ms-3 whitespace-nowrap '>Servo with Arduino</span>
                </p>
              </li>
            </ul>
          </div>
        </aside>
        <div className='h-screen p-2 bg-white z-20 text-black '>
          <div className='p-1 border-2 h-screen border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
            <section
              className='w-full h-screen ml-3 mt-1 p-2 overflow-y-auto overflow-x-hidden scroll-smooth grid lg:grid-row-2 gap-row-4'
            // style={{ height: '558px', fontFamily: 'Ubuntu' }}
            >
              <div className=' h-full w-60 m-0 p-0 md:w-full lg:w-full'>
                <div className='flex justify-between'>
                  <h2 className='heading text-4xl font-bold flex justify-between' id='exp-1'>
                    {expData.title}🚨
                  </h2>
                  <button onClick={() => handleIdChange(expData.nextExp)} className='lg:mt-2 mt-4 xl:mt-0 flex-shrink-0 inline-flex bg-dark-green text-white border-0 py-2 px-6 focus:outline-none hover:bg-light-green rounded h-[40px] lg:h-auto'>
                    Next
                  </button>
                </div>
                <p
                  className='p-8 mt-4 text-white bg-dark-green'
                  style={{
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                >
                  {expData.description.introduction}
                </p>

                <h4 className='heading text-3xl font-bold flex mt-8' id='exp-1'>
                  Step 1: Components Required{' '}
                  <Link href='#step1'>
                    <FaLink
                      className='hover:text-blue-600'
                      style={{ margin: '2px 2px' }}
                    />
                  </Link>
                </h4>

                <table className='mt-4 border-collapse border border-slate-700'>
                  <thead>
                    <tr>
                      <th className='border p-2 border-slate-400'>Device</th>
                      <th className='border p-2 border-slate-400'>Image</th>
                      <th className='border p-2 border-slate-400'>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expData.description.tableDevices.map((device, index) => (
                      <tr key={index}>
                        <td className='border p-2 border-slate-400'>
                          {device}
                        </td>
                        <td className='border p-2 border-slate-400'>
                          <Image src={expData.description.deviceImg[index]} width={60} height={60} alt="" />
                        </td>
                        <td className='border p-2 border-slate-400'>{expData.description.tableDescriptions[index]}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
                <h4 className='heading mt-4 text-3xl font-bold'>
                  Step 2: Connect Components
                </h4>

                {expData.connectionSteps.map((connect, index) => (
                  <ol className='m-8' key={index}>
                    <li className='m-1' >
                      <strong>{index + 1}{'. '}</strong>{connect}
                    </li>

                  </ol>
                ))}

                <h4 className='heading  text-3xl font-bold'>
                  Step 3: Write the Code
                </h4>
                <div
                  id='s'
                  className='mt-8 ml-0 h-auto clipboard w-60 p-4 md:w-96 flex bg-light-green'
                  style={{ borderRadius: '10px' }}
                >
                  <textarea value={expData.arduinoCode} className='w-96 bg-transparent outline-none px-3 text-dark-green overflow-hidden h-auto md:h-[440px]' readOnly></textarea>
                  {/* <textarea
                    className='w-96 bg-transparent outline-none py-1 px-3 text-dark-green overflow-hidden'
                    value={copyText}
                    value={expData.arduino_code}
                    readOnly
                    onChange={(e) => setCopyText(e.target.value)}
                  />
                  <FaClipboardCheck
                    className='text-white'
                    id='clipboardIcon'
                    size={30}
                    style={{ margin: '5px', cursor: 'pointer' }}
                    onClick={handleCopy}
                  /> */}
                </div>
                <h4 className='heading mt-4  text-3xl font-bold'>Step 4: Explanation:</h4>
                <p className='mt-6 ml-0'>
                  {expData.Explanation}
                </p>

                <h4 className='heading mt-4 text-3xl font-bold'>
                  Step 5: Putting the Code Online::
                </h4>

                {expData.IDEconfig.map((ideInte, index) => (
                  <ol className='m-8'  key={index}>
                    <li className='m-1'>
                      <strong>{index + 1}{'. '}</strong>{ideInte}
                    </li>

                  </ol>
                ))}

                <h4 className='heading  text-3xl font-bold'>Step 6: Testing:</h4>
                <p className='m-6'>
                  {expData.testing}
                </p>
              </div>

              <div className='md:w-full lg:w-80 w-[250px] lg:h-auto h-auto flex flex-wrap mr-4 md:p-4'>
                <div
                  className='text-white rounded-lg p-4 flex flex-col lg:h-auto  h-auto md:ml-auto w-full bg-dark-green'

                >
                  <h2 className='text-lg mb-1 font-medium title-font'>Feedback</h2>
                  <p className='leading-relaxed mb-5'>
                    Post-ironic portland shabby chic echo park, banjo fashion axe
                  </p>
                  <div className='relative mb-4'>
                    <label htmlFor='email' className='leading-7 text-sm'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full bg-white rounded border border-gray-300 focus:border-light-green focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                  <div className='relative mb-4'>
                    <label htmlFor='message' className='leading-7 text-sm'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-white rounded border border-dark-green focus:border-dark-green focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                    ></textarea>
                  </div>
                  <button className='text-white bg-light-green border-0 py-2 px-6 focus:outline-none hover:bg-bg-dark-green rounded text-lg'>
                    Button
                  </button>
                  <p className='text-xsmt-3'>
                    Chicharrones blog helvetica normcore iceland tousled brook viral
                    artisan.
                  </p>
                </div>
              </div>

              <div className='lg:col-start-1 lg:col-span-2 mt-6'>
                <Footer />
              </div>
            </section>
          </div>
        </div>


      </div>
    </>
  )
}

export default ArduinoNano
