import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaChartBar, FaDollarSign, FaBars, FaCog, FaShoppingBag, FaShoppingCart, FaChartLine, FaUsers } from "react-icons/fa";



const SIDEBAR_ITEMS = [
  { name: "OverView", icon: FaChartBar, color: "#6366f1", href: "/admin/overView" },
  { name: "Products", icon: FaShoppingBag, color: "#8B5CF6", href: "/admin/products" },
  { name: "Users", icon: FaUsers, color: "#EC4899", href: "/admin/users" },
  { name: "Sales", icon: FaDollarSign, color: "#10B981", href: "/admin/sales" },
  { name: "Orders", icon: FaShoppingCart, color: "#F59E0B", href: "/admin/orders" },
  { name: "Analytics", icon: FaChartLine, color: "#3B82F6", href: "/admin/analytics" },
  { name: "Settings", icon: FaCog, color: "#6EE7B7", href: "/admin/settings" },
];


export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 border-r border-gray-700 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
      >
        <FaBars size={24} />
      </button>

      <nav className="mt-8 flex-grow">
        {SIDEBAR_ITEMS.map((item) => (
          <Link key={item.href} to={item.href}>
            <div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
              {isSidebarOpen && (
                <span className="ml-4 whitespace-nowrap transition-opacity duration-300 opacity-100">
                  {item.name}
                </span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}
