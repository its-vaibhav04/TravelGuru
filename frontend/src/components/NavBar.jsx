import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = ["Home", "Destinations", "Top-Selling", "Services"];
  return (
    <nav className="bg-stone-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex sm:space-x-32 space-x-6">
            {links.map((link) => (
              <NavLink
                key={link}
                to={link == "Home" ? "/" : "/" + link.toLowerCase()}
                className={({ isActive }) =>
                  `whitespace-nowrap ${
                    isActive
                      ? "text-sky-400 border-b-2 border-sky-400"
                      : "text-sky-100 hover:text-sky-300"
                  }`
                }
              >
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
