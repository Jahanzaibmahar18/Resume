import React, { useState } from "react";
import { FileText, Pencil, CreditCard, Wallet } from "lucide-react";

export default function Checkout() {
  const [delivery, setDelivery] = useState(false);

  return (
    <div className="bg-black min-h-screen mt-5 py-18 px-6 text-white">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-black p-8 rounded-2xl border border-white/20">

          <h2 className="text-2xl font-semibold mb-2">Your details</h2>

          <p className="text-gray-400 mb-6">
            We only use this information to deliver your service and send your confirmation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="text-sm font-semibold">
                Full Name <span className="text-[#F0B100]">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold">
                Email <span className="text-[#F0B100]">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold">
                Phone <span className="text-[#F0B100]">*</span>
              </label>
              <input
                type="text"
                placeholder="+1 555 000 0000"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Country */}
            <div>
              <label className="text-sm font-semibold">
                Country <span className="text-[#F0B100]">*</span>
              </label>
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold">
                Address <span className="text-[#F0B100]">*</span>
              </label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* City */}
            <div>
              <label className="text-sm font-semibold">
                City <span className="text-[#F0B100]">*</span>
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Postal */}
            <div>
              <label className="text-sm font-semibold">
                Postal Code <span className="text-[#F0B100]">*</span>
              </label>
              <input
                type="text"
                placeholder="ZIP / Postal"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold">Notes (optional)</label>
              <textarea
                placeholder="Anything you want me to know"
                className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mt-2 h-28 focus:outline-none focus:border-[#F0B100]"
              />
            </div>
          </div>

          {/* Resume Type */}
          <div className="mt-10 border border-white/20 rounded-xl p-6">

            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Resume type</h3>

              <div className="bg-orange-100 p-2 rounded-lg">
                <FileText size={18} className="text-[#F0B100]" />
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Choose how you want your resume handled. This opens the right form.
            </p>

            <div className="flex gap-6 items-center justify-center">

              <label className="flex justify-between items-center border border-white/20 rounded-xl p-4 gap-4 cursor-pointer">
                <div className="flex items-center gap-4">
                  <input type="radio" name="resume" />
                  <span>Resume from scratch</span>
                </div>

                <FileText className="text-[#F0B100]" />
              </label>

              <label className="flex gap-4 justify-between items-center border border-white/20 rounded-xl p-4 cursor-pointer">
                <div className="flex items-center gap-4">
                  <input type="radio" name="resume" />
                  <span>Resume revamp</span>
                </div>

                <Pencil className="text-[#F0B100]" />
              </label>
            </div>

            <p className="text-gray-400 text-sm mt-3">
              Your checkout details are saved. Use “Back to checkout” on the form to return without losing your info.
            </p>
          </div>

          {/* Payment */}
          <div className="mt-10">

            <h3 className="text-lg font-semibold mb-4">
              Payment method
            </h3>

            <label className="flex justify-between items-center border border-white/20 rounded-xl p-3 mb-3 cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" />
                <span>Pay with Card</span>
              </div>

              <CreditCard className="text-[#F0B100]" />
            </label>

            <label className="flex justify-between items-center border border-white/20 rounded-xl p-4 cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" />
                <span>Pay directly (Zelle, Apple Pay, Google Pay, PayPal)</span>
              </div>

              <Wallet className="text-[#F0B100]" />
            </label>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-black p-6 h-170 rounded-2xl border border-white/20">

          <h3 className="text-xl font-semibold mb-2">
            Order summary
          </h3>

          <p className="text-gray-400 text-sm mb-6">
            Select your plan and review the total.
          </p>

          <label className="text-xs font-bold block mb-2">PLAN</label>

          <select className="w-full border border-white/20 bg-black rounded-lg px-4 py-3 mb-6">
            <option>Mid Level — $200.00</option>
            <option>Entry Level — $120.00</option>
            <option>Executive — $350.00</option>
          </select>

          <div className="border border-white/20 rounded-xl p-4 mb-4">

            <div className="flex justify-between mb-2">
              <span>✔ Cover Letter</span>
              <span>$50</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>✔ LinkedIn Profile Optimization</span>
              <span>$50</span>
            </div>

            <div className="flex justify-between">
              <span>✔ Resume</span>
              <span>$100</span>
            </div>

          </div>

          <div className="border-2 border-[#F0B100] rounded-xl p-4 flex justify-between items-center font-semibold mb-4 bg-black">
            <span>ALL COMBINED</span>
            <span>$200</span>
          </div>

          <label className="flex items-center gap-3 border border-white/20 rounded-xl p-4 cursor-pointer mb-6">
            <input
              type="checkbox"
              checked={delivery}
              onChange={() => setDelivery(!delivery)}
              className="accent-[#F0B100] "
            />
            <span>12 hours delivery (+$40.00)</span>
          </label>

          <div className="flex justify-between text-lg font-semibold border-t border-white/20 pt-4">
            <span>Total</span>
            <span>${delivery ? "240.00" : "200.00"}</span>
          </div>

        </div>
      </div>
    </div>
  );
}