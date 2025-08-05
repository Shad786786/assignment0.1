import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const donors = [
  { id: 1, name: "Samantha", amount: 1020, img: "https://i.pravatar.cc/100?img=11" },
  { id: 2, name: "Bernadette", amount: 1000, img: "https://i.pravatar.cc/100?img=12" },
  { id: 3, name: "Alexandra", amount: 720, img: "https://i.pravatar.cc/100?img=13" },
  { id: 4, name: "Michael", amount: 690, img: "https://i.pravatar.cc/100?img=14" },
  { id: 5, name: "Emily", amount: 650, img: "https://i.pravatar.cc/100?img=15" },
  { id: 6, name: "Robert", amount: 600, img: "https://i.pravatar.cc/100?img=16" },
  { id: 7, name: "Sophia", amount: 580, img: "https://i.pravatar.cc/100?img=17" },
  { id: 8, name: "William", amount: 550, img: "https://i.pravatar.cc/100?img=18" },
  { id: 9, name: "Olivia", amount: 530, img: "https://i.pravatar.cc/100?img=19" },
  { id: 10, name: "James", amount: 500, img: "https://i.pravatar.cc/100?img=20" },
];

export default function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 const navigate = useNavigate();
  return (
    <>
   
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
       <div className="flex top-10 absolute justify-center bg-white rounded-lg"><h1 className="bg-white rounded-xl py-1.5 px-6 text-center font-bold text-2xl shadow-md">
  Leadboard
</h1>
</div>
      <div className="w-full max-w-5xl mt-20 bg-white rounded-2xl shadow-xl border p-6 overflow-hidden">
        
        {/* Top 3 Donors */}
        <div className="flex justify-center mb-8 gap-6 items-end">
          {/* #3 Left */}
          <div className="flex bg-gray-200 py-4 px-6 rounded-2xl flex-col items-center space-y-1 relative">
            <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">#3</span>
            <img src={donors[2].img} alt={donors[2].name} className="w-20 h-20 rounded-full border-4 border-blue-200" />
            <p className="font-semibold text-gray-700">{donors[2].name}</p>
            <p className="font-bold text-black">₹{donors[2].amount}</p>
          </div>

          {/* #1 Center */}
          <div className="flex bg-gray-200 py-6 px-8 rounded-2xl flex-col items-center space-y-2 relative scale-110 z-10 shadow-xl">
            <span className="absolute top-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">#1 Top</span>
            <img src={donors[0].img} alt={donors[0].name} className="w-24 h-24 rounded-full border-4 border-yellow-300" />
            <p className="font-semibold text-gray-700">{donors[0].name}</p>
            <p className="font-bold text-lg text-black">₹{donors[0].amount}</p>
          </div>

          {/* #2 Right */}
          <div className="flex bg-gray-200 py-4 px-6 rounded-2xl flex-col items-center space-y-1 relative">
            <span className="absolute top-2 right-2 bg-gray-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">#2</span>
            <img src={donors[1].img} alt={donors[1].name} className="w-20 h-20 rounded-full border-4 border-blue-200" />
            <p className="font-semibold text-gray-700">{donors[1].name}</p>
            <p className="font-bold text-black">₹{donors[1].amount}</p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search donor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs border rounded-md hover:bg-gray-100">Newest</button>
            <button className="px-3 py-1 text-xs border rounded-md hover:bg-gray-100">Oldest</button>
            <button className="px-3 py-1 text-xs border rounded-md hover:bg-gray-100">Top Donor</button>
          </div>
        </div>

        {/* Donor List */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {filteredDonors.map((donor, index) => (
            <div key={donor.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-medium w-5">{index + 1}</span>
                <img src={donor.img} alt={donor.name} className="w-10 h-10 rounded-full" />
                <span className="text-gray-700 font-semibold">{donor.name}</span>
              </div>
              <span className="text-sm text-gray-500 hidden sm:block">Donated raised</span>
              <span className="font-bold text-gray-800">₹{donor.amount}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
    <div className="w-full flex justify-center mb-10">
  <button onClick={() => navigate('/dashboard')} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1.5 px-10 rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:scale-95 transition duration-300">
    Dashboard
  </button>
</div>
    </>
  );
}
