import { NavLink } from "@remix-run/react";

export default function Header() {
  return (
    <div className="fixed top-2 mx-auto inset-x-0 p-1 w-[300px] shadow-md shadow-slate-200 rounded-xl flex gap-x-4 justify-between">
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "bg-foreground text-background rounded-xl" : ""
        }
      >
        <div
          className={
            "px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl"
          }
        >
          About
        </div>
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "bg-foreground text-background rounded-xl" : ""
        }
      >
        <div className="px-4 py-1 text-xl font-semibold hover:bg-slate-700 hover:text-background rounded-xl">
          ED
        </div>
      </NavLink>
      <NavLink
        to={"/shop"}
        className={({ isActive }) =>
          isActive ? "bg-foreground text-background rounded-xl" : ""
        }
      >
        <div className="px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl">
          Shop
        </div>
      </NavLink>
    </div>
  );
}
