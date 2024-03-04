import React from "react";
import DashboardList from "./DashboardList";

const DashboardCard = () => {
  return (
    <>
      <div className="Main-DetailContainer border-2 py-2 h-screen border-black flex flex-col lg:flex-row">
        <div className="Invoice   border-green-500 w-[100%] lg:w-[70%] m-auto ">
          <div className=" py-2 px-2 border-black">
            <h1 className="text-3xl py-2"> Invoice </h1>
            <h2 className="text-lg py-2 text-[#4C4D4F]"> Invoice List </h2>
          </div>
          <div className="py-2 px-2">
            <DashboardList />
          </div>
        </div>

        <div className="Invoiceprint border-2 w-[100%] min-h-screen lg:w-[30%] m-auto border-yellow-700">
          <div className="border-2 py-2 px-2 border-black">
            <h1 className="text-3xl py-2"> Invoice </h1>
            <h2 className="text-lg py-2 text-[#4C4D4F]"> Invoice List </h2>
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardCard;
