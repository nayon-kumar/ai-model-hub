import React from "react";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="px-4 mt-7">
      <div className="flex flex-col-reverse gap-10 sm:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full">
            ✨ Frontier AI Models
          </div>

          <h1 className="text-4xl mt-4 lg:text-5xl font-bold leading-tight tracking-tighter text-red-600">
            One Subscription.
            <br />
            <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              All the AIs You Need
            </span>
          </h1>

          <p className="text-lg mt-4 text-zinc-700 max-w-lg">
            Experience the full spectrum of frontier intelligence - all the most
            advanced AI models, unified under a single, powerful subscription.
          </p>

          <div className="flex items-center justify-center sm:justify-normal pt-5">
            <button className="bg-red-600 hover:bg-red-500 transition-all btn rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Get Unlimited Access
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>

          <div className="flex items-center justify-center sm:justify-normal gap-3 sm:gap-8 text-sm text-zinc-600 pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            className="drop-shadow-2xl h-140  rounded-3xl animate-pulse"
            src={BannerImage}
            alt="AI Models Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
