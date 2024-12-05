export default function Header() {
  return (
    <div className="w-full border-b-2 border-slate-150">
      <div className="flex justify-between items-center px-4 py-3 h-full">
        {/* Brand Section */}
        <div className="flex items-center gap-2">
          <img
            src="main-logo.png"
            width={60}
            height={60}
            alt="header image"
            className="sm:w-20 sm:h-20"
          />
          <span className="text-xl sm:text-3xl font-bold text-black tracking-wide font-poppins">
            WhatBytes
          </span>
        </div>

        {/* Profile Button */}
        <button className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-400/30">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="Rahil Siddique Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
          <span className="text-lg font-medium text-gray-800">
            Rahil Siddique
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button className="sm:hidden flex items-center justify-center p-2 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="Rahil Siddique Avatar"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </div>
  );
}
