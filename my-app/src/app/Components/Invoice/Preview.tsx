import { INVOICE_HEAD, INVOICE_ROWS } from "@/app/context";
import Image from "next/image";
import React from "react";
import { BsPrinter } from "react-icons/bs";
import PreviewList from "./PreviewList";

const Preview = () => {
  return (
    <>
      <div className="rounded-lg border-2 bg-[#FFFFFF]  shadow-xl px-2 py-10    border-yellow-500">
        
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

        <div className=" px-2 border-gray-300 rounded-xl">
          <div className="py-4 px-2">
            <Image
              src={"/assets/Skinclub.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className=" py-4 px-2">
            <p> Summary ----------------- </p>
          </div>

          <div className="border-2 px-2 flex justify-between ">
            <p className="text-[.8rem]"> Dr. Vihang </p>
            <p className="text-[.8rem]"> Jane Doe </p>
            <p> </p>
          </div>

          {/*  */}

          <div>
            <PreviewList/>
          </div>

          <div className=" border-black py-4 px-4 flex  justify-between">
            <div></div>

            <div className="grid  grid-cols-2 gap-4">
              <div className=" text-[.8rem]">
                <p className="text-end py-1 font-semibold">Subtotal:</p>
                <p className="text-end text-[#4C4D4F] py-1">Tax (5%):</p>
                <p className="text-end text-[#4C4D4F] py-1">Discount (10%):</p>
              </div>
              <div className="text-[.8rem] text-end">
                <p className="py-1 font-semibold">$540.00</p>
                <p className="py-1 text-[#4C4D4F]">$00.00</p>
                <p className="py-1 text-[#4C4D4F]">$00.00</p>
               </div>
            </div>
          </div>

            <div className="border-t-2  py-2 "/>

          <div className=" border-black px-4 flex  justify-between">
            <div></div>
            <div className="grid  grid-cols-2 gap-10">
              <div className="text-start text-[.8rem]">
                <p className="py-1 font-semibold">Total:</p>
              </div>
              <div className="text-[.8rem] text-end">
                <p className="py-1 font-semibold">$540.00</p>
              </div>
            </div>
          </div>


        <div className="px-4 py-4 bg-[#F8F8F8]">
            <h2 className="text-[.9rem]"> Notes/Terms </h2>
             <p className="text-[.7rem] text-[#000000]"> Lorem ipsum dolor sit amet. Sit eaque assumenda qui. </p>
        </div>

        </div>

          <div className=" py-6 flex items-center ">

            <button className="bg-black px-8 rounded-full text-base text-[#ffffff] py-6 text-center m-auto"> Create New Invoice </button>

          </div>


      </div>
    </>
  );
};

export default Preview;
