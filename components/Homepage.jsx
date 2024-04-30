import Link from 'next/link';
import style from '@/components/navbar.module.css';
function Homepage() {
  return (
    <>
      <div class="mx-auto space-x-2 bg-fixed bg-center bg-no-repeat flex justify-center  items-center h-screen w-full bg-gradient-to-br from-dark-green from-10% via-light-green via-60% to-white to-90% ">
        <div
          className={`${style.circle} bg-dark-green rounded-full w-40 h-40 absolute shadow-lg shadow-dark-green `}
        ></div>
        <div
          className={`${style.circle2} bg-dark-green rounded-full absolute shadow-lg shadow-dark-green `}
        ></div>
        <div class="flex flex-col text-center backdrop-blur-sm bg-white/30 w-1/2 mx-auto rounded-lg p-4">
          <h2 class="text-xs text-dark-green tracking-widest font-medium title-font mb-1">
            ROOF PARTY POLAROID
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify subway tile poke farm-to-table. Franzen you probably haven
            not heard of them man bun deep jianbing selfies heirloom prism food
            truck ugh squid celiac humblebrag.
          </p>
          <div class="max-w-md mx-auto mt-10 w-full">
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-dark-green overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-light-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-dark-green pl-2 bg-light-green"
                type="text"
                id="search"
                placeholder="  Search something.."
              />
            </div>
            <div class="flex mt-6 lg:w-2/3 w-full mx-auto  justify-center">
              <Link
                href="/arduino/exp1"
                class="text-dark-green inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 py-16 mx-auto h-screen bg-gradient-to-br from-dark-green from-10% via-light-green via-60% to-white to-90% ">
        <div class="flex flex-col text-center backdrop-blur-sm bg-white/30 w-1/2 mx-auto rounded-lg p-4">
          <h2 class="text-xs text-dark-green tracking-widest font-medium title-font mb-1">
            ROOF PARTY POLAROID
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify subway tile poke farm-to-table. Franzen you probably haven
            not heard of them man bun deep jianbing selfies heirloom prism food
            truck ugh squid celiac humblebrag.
          </p>
          <div class="max-w-md mx-auto mt-10 w-full">
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-dark-green overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-light-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-dark-green pl-2 bg-light-green"
                type="text"
                id="search"
                placeholder="  Search something.."
              />
            </div>
            <div class="flex mt-6 lg:w-2/3 w-full mx-auto  justify-center">
              <Link
                href="/arduino/exp1"
                class="text-dark-green inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
