import { INVOICE_HEAD, INVOICE_ROWS } from "@/app/context";
import Image from "next/image";
import React from "react";
import { BsPrinter } from "react-icons/bs";

const Preview = () => {


  return (
    <>
      <div className="rounded-lg bg-[#FFFFFF] h-screen shadow-xl px-2  py-2  border-yellow-500">
        <div className=" px-2 py-2 flex justify-between">
          <div className="flex items-center">
            <div className="p-2 px-4 font-normal rounded-lg flex items-center">
              Preview Invoice
            </div>
          </div>
          <div className="flex  items-center">
            <div className="flex flex-row gap-2 text-[#4C4D4F] text-[.6rem] bg-[#F8F8F8] p-2 rounded-lg mr-2">
              <BsPrinter className="m-auto text-2xl" />
            </div>
          </div>
        </div>

        <div className="border-2 px-4 border-gray-300 rounded-xl">
          <div className="py-4 px-4">
            <Image
              src={"/assets/Skinclub.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className=" py-4 px-4">
            <p> Summary ----------------- </p>
          </div>

          <div className="border-2 px-4 flex justify-between ">
            <p className="text-[.8rem]"> Dr. Vihang </p>
            <p className="text-[.8rem]"> Jane Doe </p>
            <p> </p>
          </div>
       
         {/*  */}


     <div className="border-2 rounded-lg mt-10  py-2 overflow-x-auto">
        <table className="table-auto w-full  ">
          <thead>
            <tr className="rounded-t-lg bg-[#000000] ">
              {INVOICE_HEAD.map((header, index) => (
                <th key={index} className="px-4  text-[#FFFFFF] text-[.6rem] text-start py-4">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="  text-left text-sm  text-[#4C4D4F] w-[90%] m-auto">
            {INVOICE_ROWS.map((row, rowIndex) => (
              <tr key={rowIndex} className=" text-[.7rem] bg-[#F8F8F8] px-8 py-8 " >
                <td className=" px-4 py-2">{row.name}</td>
                <td className=" px-4 py-2">{row.Rate}</td>
                <td className=" px-4 py-2">{row.qty}</td>
                <td className=" px-4 py-2">{row.Total}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>


         

        </div>
      </div>
    </>
  );
};

export default Preview;
