
import { motion } from "framer-motion"; 
import Bar from './reward';
import { useNavigate } from 'react-router-dom';
import React , { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";  
import Addint from "./addintern"

export default function InternDashboard() {
  const internName = "Shad Siddiqui";
  const referralCode = "shad2025";
  const totalDonations = " ";
  const [copied, setCopied] = useState(false);
  const [interns, setInterns] = useState([]);
  


  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const referrals = [
    { initials: "JS", name: "John Stone", email: "john.stone@gmail.com" },
    { initials: "PP", name: "Ponnappa Priya", email: "ponnappa.priya@outlook.com" },
    { initials: "PS", name: "Peter Stanbridge", email: "peter.stanbridge@gmail.com" },
    { initials: "MW", name: "Mia Wong", email: "mia.wong@hotmail.com" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
const navigate = useNavigate();

 //  Fetch Realtime Firestore Data
  useEffect(() => {
    const internsRef = collection(db, "john");  
    const unsubscribe = onSnapshot(internsRef, (snapshot) => {
      const internsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInterns(internsData);
    });

    return () => unsubscribe();
  }, []);


//summing total amount
  const [totalDonationsSum, setTotalDonationsSum] = useState(0);
  useEffect(() => {
  const internsRef = collection(db, "john");  
  const unsubscribe = onSnapshot(internsRef, (snapshot) => {
    const internsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setInterns(internsData);

    // Calculate Total Donations Sum
    const totalSum = internsData.reduce((acc, intern) => acc + (parseInt(intern.DonationAmount) || 0), 0);
    setTotalDonationsSum(totalSum);
  });

  return () => unsubscribe();
}, []);

//feaching name of top contributer
const [topContributor, setTopContributor] = useState(null);

useEffect(() => {
  const internsRef = collection(db, "john");  // john collection
  const unsubscribe = onSnapshot(internsRef, (snapshot) => {
    const internsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    setInterns(internsData);

    // Calculate Total Donations Sum
    const totalSum = internsData.reduce((acc, intern) => acc + (parseInt(intern.DonationAmount) || 0), 0);
    setTotalDonationsSum(totalSum);

    // Find Top Contributor (Max DonationAmount)
    const topIntern = internsData.reduce((max, intern) => {
      const currentDonation = parseInt(intern.DonationAmount) || 0;
      const maxDonation = parseInt(max.DonationAmount) || 0;
      return currentDonation > maxDonation ? intern : max;
    }, { DonationAmount: 0 });  // Initial max

    setTopContributor(topIntern);
  });

  return () => unsubscribe();
}, []);

//searching intern by name
const [searchQuery, setSearchQuery] = useState("");

  // Filter interns by search query (case-insensitive)
  const filteredInterns = interns.filter((intern) =>
    intern.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-400 to-white flex flex-col items-center  w-full ">
        <motion.section
          className=" bg-gradient-to-r from-pink-500 via-red-300 to-purple-600 text-white p-8 md:p-12 text-center rounded shadow-md mb-10 w-full max-w-8xl lg:h-80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-5xl font-bold mt-10 mb-4">Fundraising Intern Dashboard</h1>
          <p className="text-lg md:text-xl mb-6">Turning Your Efforts into Impactful Contributions.</p>
        <button onClick={() => navigate('/login')} className="justify-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-1.5 px-8 rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:scale-95 transition duration-300">
  Login
</button>

        </motion.section>

        <div className="max-w-6xl w-full mx-auto px-4">
          {/* Profile & Stats Section */}
          <motion.section className="flex flex-col min-h-50 md:flex-row md:items-center md:justify-between bg-gray-800 rounded-xl p-6 text-white gap-6"
          
           initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          >
            {/* Left: Profile Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                {internName.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{internName}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm">
                    Referral Code:{" "}
                    <span className="bg-white/20 px-2 py-1 rounded font-mono">{referralCode}</span>
                  </p>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 rounded text-white"
                  >
                    <img src="src/image/icons8-copy-50.png" alt="Copy" className="w-4 h-4" />
                    Copy
                  </button>
                  {copied && <span className="text-green-400 text-xs ml-2">Copied!</span>}
                </div>
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              <div className="bg-blue-500 text-center rounded-xl px-6 py-4">
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm mt-1">Your Referrals</p>
              </div>
              <div className="bg-red-400 text-center rounded-xl px-6 py-4">
               <p className="text-2xl font-bold">
    {topContributor ? topContributor.name : 'Loading...'}
  </p>
                <p className="text-sm mt-1">Top Contributor #1</p>
              </div>
              <div className="bg-green-400 text-center rounded-xl px-6 py-4">
               <p className="text-2xl font-bold">₹{totalDonationsSum}</p>

                <p className="text-sm mt-1">Total Donations</p>
              </div>
            </div>
          </motion.section>

          {/* Progress Bar */}
          <Bar />

          {/* Interns data, Referrals,amount raised */}
 <section className="mt-4 mb-10 bg-white p-6 rounded-xl shadow-md">
  <h3 className="text-xl font-bold text-gray-800 mb-6">Interns Overview</h3>

  {/* 🔍 Search Bar */}
  <div className="mb-4">
    <input
      type="text"
      placeholder="Search Intern by Name..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Desktop Table View */}
  <div className="overflow-x-auto hidden sm:block">
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">#</th>
          <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Intern Name</th>
          <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Referral Code</th>
          <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Total Donations raised</th>
          <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Rewards</th>
        </tr>
      </thead>
    </table>

    {/* Scrollable Table Body */}
    <div className="max-h-96 overflow-y-auto">
      <table className="min-w-full border-t border-gray-200">
        <tbody>
          {filteredInterns.map((intern, index) => (
            <tr key={intern.id} className="hover:bg-gray-50">
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6 font-medium text-gray-800">{intern.name}</td>
              <td className="py-3 px-16 font-mono text-gray-600">{intern.referralCode}</td>
              <td className="py-3 px-15 font-bold text-gray-900">₹{intern.DonationAmount}</td>
              <td className="py-3 px-0 font-semibold text-green-700">{intern.rewards}</td>
            </tr>
          ))}

          {filteredInterns.length === 0 && (
            <tr>
              <td colSpan="5" className="py-6 text-center text-gray-500">No Intern Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>

  {/* Mobile Card View */}
  <div className="block sm:hidden">
  <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2"> {/* Adjust height as per approx. 5 cards */}
    {filteredInterns.map((intern, index) => (
      <div key={intern.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">#{index + 1}</span>
          <span className="font-semibold text-green-600">{intern.rewards}</span>
        </div>
        <h4 className="text-lg font-bold text-gray-800">{intern.name}</h4>
        <p className="text-sm text-gray-600 mt-1">Referral Code: <span className="font-mono">{intern.referralCode}</span></p>
        <p className="text-md font-bold text-gray-900 mt-2">₹{intern.DonationAmount}</p>
      </div>
    ))}

    {filteredInterns.length === 0 && (
      <div className="text-center text-gray-500">No Intern Found</div>
    )}
  </div>
</div>
</section>

<Addint />

<div className="w-full flex justify-center mb-5">
  <button onClick={() => navigate('/leadboard')} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1.5 px-10 rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:scale-95 transition duration-300">
    Leadboard
  </button>
</div>
        </div>
      </main>
    </>
  );
}
