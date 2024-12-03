import Link from "next/link";
import { ChartNoAxesColumn, Award, StickyNote } from "lucide-react";

export function Sidebar() {
  const menuItems = [
    {
      icon: <ChartNoAxesColumn className="w-6 h-6 " />,
      text: "Dashboard",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      text: "Skill Test",
    },
    {
      icon: <StickyNote className="w-6 h-6" />,
      text: "Internship",
    },
  ];

  return (
    <aside className="bg-white w-64 min-h-screen shadow-lg flex flex-col">
      <ul className="flex flex-col space-y-2 px-2 mt-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href="#"
              className={`flex items-center h-12 px-4 py-1 rounded-lg group hover:bg-gray-100 transition-transform duration-200 ${
                item.text === "Skill Test"
                  ? "text-blue-500 bg-gray-50 shadow-inner"
                  : "text-gray-700"
              }`}
            >
              <span className="flex items-center justify-center w-10 h-10 group-hover:text-blue-500 transition-colors">
                {item.icon}
              </span>
              <span className="ml-3 text-lg font-semibold group-hover:text-blue-500">
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
