import React from "react";

const Sidebar = () => {

  return (
    <>
      <div className="relative border-2  border-red-600 flex h-full w-full  flex-col  bg-[#FFFFFF] bg-clip-border p-4 shadow-xl">

        <div className="flex items-center gap-4 p-2 mb-2">
          
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
             Overview
          </h5>
        </div>
        <div className="flex items-center gap-4 p-2 mb-2">
          
          <h5 className="block font-sans text-lg antialiased font-normalleading-snug tracking-normal text-[#4C4D4F]">
             Profile
          </h5>
        </div>
        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
           Appointments
          </h5>
        </div>

        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
            History
          </h5>
        </div>

        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors 
                border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-[#4C4D4F]"
              >
                <p className="block mr-auto font-sans text-sm antialiased font-normal leading-relaxed text-[#4C4D4F]">
                  Dashboard
                </p>
              </button>
              

            </div>
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors 
                border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-[#4C4D4F]"
              >
                <p className="block mr-auto font-sans text-sm antialiased font-normal leading-relaxed text-[#4C4D4F]">
                Videos Library
                </p>
              </button>
              

            </div>
          </div>
        </nav>
        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
           Messages
          </h5>
        </div>
        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
          Support
          </h5>
        </div>
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors 
                border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-[#4C4D4F]"
              >
                <p className="block mr-auto font-sans text-sm antialiased font-normal leading-relaxed text-[#4C4D4F]">
                 FaQ'S
                </p>
              </button>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors 
                border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-[#4C4D4F]"
              >
                <p className="block mr-auto font-sans text-sm antialiased font-normal leading-relaxed text-[#4C4D4F]">
                Procedure Information
                </p>
              </button>
              
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
          Aftercare
          </h5>
        </div>
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors 
                border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-[#4C4D4F]"
              >
                <p className="block mr-auto font-sans text-sm antialiased font-normal leading-relaxed text-[#4C4D4F]">
                Quizzes
                </p>
              </button>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-[#4C4D4F] focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-[#4C4D4F] active:bg-blue-gray-50 active:bg-opacity-80 active:text-[#4C4D4F]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors 
                border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-[#4C4D4F]"
              >
                <p className="block mr-auto font-sans text-sm antialiased font-normal leading-relaxed text-[#4C4D4F]">
                 Health &nSkin Assesment
                </p>
              </button>
              
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
           Finances
          </h5>
        </div>
        <div className="flex items-center gap-4 p-2 mb-2">
          <h5 className="block font-sans text-lg antialiased font-normal leading-snug tracking-normal text-[#4C4D4F]">
          virtual Consulation
          </h5>
        </div>

     
      </div>
    </>
  );
};

export default Sidebar;
