import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";


export default function AddInternForm() {
  const [formData, setFormData] = useState({
    name: "",
    referralCode: "",
    DonationAmount: "",
    rewards: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "john"), {
        name: formData.name,
        referralCode: formData.referralCode,
        DonationAmount: parseInt(formData.DonationAmount),
        rewards: formData.rewards,
      });

      alert("Intern Added Successfully!");
      setFormData({
        name: "",
        referralCode: "",
        DonationAmount: "",
        rewards: "",
      });
    } catch (error) {
      console.error("Error adding intern: ", error);
      alert("Failed to add intern!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Intern</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Intern Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2"
          required
        />
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code"
          value={formData.referralCode}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2"
          required
        />
        <input
          type="number"
          name="DonationAmount"
          placeholder="Donation Amount"
          value={formData.DonationAmount}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2"
          required
        />
        <input
          type="text"
          name="rewards"
          placeholder="Rewards"
          value={formData.rewards}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2"
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Add Intern
          </button>
        </div>
      </form>
    </div>
  );
}
