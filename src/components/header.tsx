export default function Header() {
  return (
    <div className="w-full border-b-2 border-slate-150">
      <div className="flex justify-between items-center px-6 py-4 h-full">
        {/* Brand Section */}
        <div className="flex items-center ">
          <img
            src="main-logo.png"
            width={90}
            height={90}
            alt="header image"
            className=""
          />
          <span className="text-3xl font-bold text-black tracking-wide font-poppins">
            WhatBytes
          </span>
        </div>

        {/* Profile Button */}
        <button className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-400/30">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="Rahil Siddique Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
          <span className="text-lg font-medium text-gray-800">Rahil Siddique</span>
        </button>
      </div>
    </div>
  );
}
