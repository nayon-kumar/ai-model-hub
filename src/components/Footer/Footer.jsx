import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 mt-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:justify-center md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 cursor-pointer">
              <img src="/logo.png" alt="AI Hub Logo" className="h-10 w-auto" />
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                AI Hub
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              One subscription. Access to all frontier AI models in a single
              powerful platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 md:col-span-1">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Models
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Pricing
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Features
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  API
                </p>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-1">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  About Us
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Blog
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Careers
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Contact
                </p>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-1">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Legal</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Terms of Service
                </p>
              </li>
              <li>
                <p className="hover:text-white transition cursor-pointer">
                  Cookie Settings
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 py-5 border-t border-zinc-800 text-center text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
