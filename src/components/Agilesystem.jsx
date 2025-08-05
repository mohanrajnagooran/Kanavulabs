import React from "react";
import { BarChart4, Folder, Package } from "lucide-react"; 


export default function Agilesystem()  {
    return(
        <section className="max-w-7xl bg-white  mx-auto px-6 mt-10 mb-15">
      {/* Top Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl md:w-2xl font-bold text-black">
            We are an agile team of passionate innovators
          </h2>
          <p className="text-gray-700 mt-4 md:w-2xl">
            We are an agile team of passionate innovators dedicated to building smart, scalable solutions. With a focus on collaboration, creativity, and cutting-edge technology, we turn challenges into opportunities that drive real impact.
          </p>
        </div>
        <button className=" bg-black text-white px-6 py-2 rounded-md mt-4 hover:bg-orange-500">
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
            We offer high-quality solutions at affordable costs, tailored for startups and growing companies. Get enterprise-grade results without breaking your budget.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 p-6 rounded-md space-y-4">
          <Folder className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold">
            Effective and scalable infrastructure
          </h3>
          <p className="text-gray-700 text-sm">
            We build effective and scalable infrastructure that grows with your business. Our solutions ensure performance, reliability, and flexibility—ready to handle today’s demands and tomorrow’s growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 p-6 rounded-md space-y-4">
          <Package className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold">
            Deliver your MVP in 4 weeks or less
          </h3>
          <p className="text-gray-700 text-sm">
            Launch your MVP in 4 weeks or less. We fast-track your idea into a functional product with just the right features to validate, iterate, and grow.
          </p>
        </div>
      </div>
    </section>
    )
}