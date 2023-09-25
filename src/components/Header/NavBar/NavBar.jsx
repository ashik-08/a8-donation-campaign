import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pt-5 md:pt-12">
      <div>
        <img className="w-10/12 md:w-auto" src="https://i.ibb.co/JyhkhRR/Logo.png" alt="logo-img" />
      </div>
      <div className="space-x-2 md:space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-spe-text text-sm md:text-lg font-bold underline" : "text-pri-text text-sm md:text-lg"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive }) =>
            isActive ? "text-spe-text text-sm md:text-lg font-bold underline" : "text-pri-text text-sm md:text-lg"
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "text-spe-text text-sm md:text-lg font-bold underline" : "text-pri-text text-sm md:text-lg"
          }
        >
          Statistics
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
