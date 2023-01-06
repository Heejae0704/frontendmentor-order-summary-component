import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Order summary component</title>
      </Head>
      <div className="relative flex min-h-screen w-full items-center justify-center bg-customBlue-200 px-[25px] sm:px-0">
        <div className="relative z-10 flex w-[420px] flex-col overflow-hidden rounded-xl bg-white sm:h-[650px]">
          <div className="h-[159px] w-full bg-[url('/illustration-hero.svg')] bg-contain sm:h-[205px]"></div>
          <div className="flex flex-col items-center py-[30px] px-[25px] sm:px-[45px] sm:py-[40px]">
            <h1 className="mb-4 text-[22px] font-black text-customBlue-500 sm:text-[28px]">
              Order Summary
            </h1>
            <div className="mb-[22px] text-center font-normal text-customBlue-300 sm:mb-4">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </div>
            <div className="mb-[22px] flex w-full items-center justify-between rounded-xl bg-customBlue-100 p-[20px] sm:mb-8">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                    <path
                      fill="#717FA6"
                      fill-rule="nonzero"
                      d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-[110px] sm:w-[150px]">
                <div className="flex flex-col">
                  <div className="text-sm font-bold sm:text-base">
                    Annual Plan
                  </div>
                  <div className="text-sm text-customBlue-300 sm:text-base">
                    $59.99/year
                  </div>
                </div>
              </div>
              <div className="text-sm font-bold text-customBlue-400 underline">
                Change
              </div>
            </div>
            <div className="mb-[22px] w-full rounded-xl bg-customBlue-400 py-[14px] text-center text-sm tracking-wide text-white shadow-xl shadow-customBlue-400/30 sm:mb-8">
              Proceed to Payment
            </div>
            <div className="text-sm font-bold tracking-wide text-customBlue-300">
              Cancel Order
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="437"
          className="absolute top-0 left-0 z-0 hidden sm:block"
        >
          <path
            fill="#D6E1FF"
            fill-rule="evenodd"
            d="M0 349.974c218.558 116.035 460.05 116.035 724.475 0s502.933-116.035 715.525 0V0H0v349.974z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="194"
          className="absolute top-0 left-0 sm:hidden"
        >
          <path
            fill="#D6E1FF"
            fill-rule="evenodd"
            d="M-131.808 155.366c97.026 51.512 204.233 51.512 321.62 0 117.388-51.512 223.27-51.512 317.648 0V0h-639.268v155.366z"
          />
        </svg>
      </div>
    </>
  );
};

export default Home;
