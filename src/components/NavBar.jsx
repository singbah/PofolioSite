import { Home, ImageIcon, User, Workflow, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const taps = [
  { name: "Home", icon: Home, link: "/" },
  { name: "About", icon: User, link: "/about" },
  { name: "Gallery", icon: ImageIcon, link: "/gallery" },
  { name: "Projects", icon: Workflow, link: "/projects" },
  { name: "Contact", icon: Mail, link: "/contact" },
];

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTap, setActiveTap] = useState(
    localStorage.getItem("currentTap") || "/",
  );

  const swapActiveTap = (link) => {
    localStorage.setItem("currentTap", link);
    setActiveTap(link);
    navigate(link);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur shadow-md">
      <div className="max-w-6xl mx-auto flex items-center gap-3 px-3 py-3">
        {/* Logo - stays fixed, never scrolls */}
        <button
          onClick={() => swapActiveTap("/")}
          className="text-white font-bold text-lg tracking-wide shrink-0"
        >
          John<span className="text-green-500">.Dev</span>
        </button>

        {/* SCROLLABLE AREA - this is the fix */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <ul className="flex items-center gap-2 w-max">
            {taps.map((item) => {
              const isActive = location.pathname === item.link;
              const Icon = item.icon;
              return (
                <li key={item.link} className="shrink-0">
                  <button
                    onClick={() => swapActiveTap(item.link)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Hide scrollbar - add this once */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
}
