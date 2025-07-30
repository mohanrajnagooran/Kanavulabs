import React from "react";
import { BarChart4, Folder, Package } from "lucide-react"; 


export default function Agilesystem()  {
    return(
        <section className="max-w-7xl bg-white  mx-auto px-6 mt-10 mb-15">
      {/* Top Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-25">
        <div>
          <h2 className="text-3xl md:text-4xl md:w-2xl font-bold text-black">
            We are an agile team of passionate innovators
          </h2>
          <p className="text-gray-700 mt-4 md:w-2xl">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
        </div>
        <button className=" bg-black text-white px-6 py-2 rounded-md mt-4">
          Contact Us
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-50 p-6 rounded-md space-y-4">
          <BarChart4 className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold">
            Affordable cost for startups and companies
          </h3>
          <p className="text-gray-700 text-sm">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 p-6 rounded-md space-y-4">
          <Folder className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold">
            Effective and scalable infrastructure
          </h3>
          <p className="text-gray-700 text-sm">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 p-6 rounded-md space-y-4">
          <Package className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold">
            Deliver your MVP in 4 weeks or less
          </h3>
          <p className="text-gray-700 text-sm">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to
            your site. This isn't guesswork.
          </p>
        </div>
      </div>
    </section>
    )
}