import { NavLink } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div>
      <nav className="px-10 lg:px-24 py-3 flex justify-between items-center shadow-md relative">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="sudharsan"
            className="w-16 h-12 object-cover"
          />
        </div>

        <ul className="flex items-center gap-x-6 font-semibold">
          <li>
            <NavLink to={"/"} className="active-nav">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="active-nav">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="active-nav">
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className="active-nav">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="active-nav">
              Contact
            </NavLink>
          </li>
        </ul>

        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 nav-border-animate"></span>
      </nav>
    </div>
  );
};
export default TheNavbar;
