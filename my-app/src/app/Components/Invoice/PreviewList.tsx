import { INVOICE_HEAD, INVOICE_ROWS } from '@/app/context'
import React from 'react'

const PreviewList = () => {


  return (
    <div>
          <div className="border-2 rounded-lg mt-10  py-2 overflow-x-auto">
            <table className="table-auto w-full  ">
              <thead>
                <tr className="rounded-t-lg bg-[#000000] ">
                  {INVOICE_HEAD.map((header, index) => (
                    <th
                      key={index}
                      className="px-4  text-[#FFFFFF] text-[.6rem] text-start py-4"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="  text-left text-sm  text-[#4C4D4F] w-[90%] m-auto">
                {INVOICE_ROWS.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className=" text-[.7rem] bg-[#F8F8F8] px-8 py-8 "
                  >
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
  )
}

export default PreviewList