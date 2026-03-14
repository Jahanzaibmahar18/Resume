import React from "react";
import { CreditCard, ShieldCheck, Wallet } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="px-6 bg-black">
      
      {/* Top Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F0B100]">
          Secure Checkout
        </h2>
        <p className="text-gray-300 mt-3">
          Pay safely with your preferred method.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-300">
          <ShieldCheck className="inline-block w-4 h-4 text-green-500" />
          Visa, Mastercard, PayPal
        </div>
      </div>

      {/* Payment Methods */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="flex items-center justify-center p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-white">
          <CreditCard className="w-8 h-8 text-blue-400 mr-2" />
          VISA
        </div>
        <div className="flex items-center justify-center p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-white">
          <CreditCard className="w-8 h-8 text-red-400 mr-2" />
          Mastercard
        </div>
        <div className="flex items-center justify-center p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-white">
          <Wallet className="w-8 h-8 text-blue-400 mr-2" />
          PayPal
        </div>
        <div className="flex items-center justify-center p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-white">
          <CreditCard className="w-8 h-8 text-purple-400 mr-2" />
          Stripe
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-300 mb-4">
          Not sure which package is right for you?
        </p>
        <button className="bg-[#F0B100] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition">
          Choose Your Package
        </button>
      </div>
    </section>
  );
};

export default PaymentSection;