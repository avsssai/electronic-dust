import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div className="sticky z-20 bg-white top-2 mx-auto inset-x-0 p-1 w-[300px] shadow-md shadow-slate-200 rounded-xl flex gap-x-4 justify-between">
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "bg-foreground text-background rounded-xl" : ""
        }
      >
        <motion.div
          className={
            "px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl"
          }
        >
          About
        </motion.div>
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "bg-foreground text-background rounded-xl" : ""
        }
      >
        <motion.div className="px-4 py-1 text-xl font-semibold hover:bg-slate-700 hover:text-background rounded-xl">
          ED
        </motion.div>
      </NavLink>
      <NavLink
        to={"/shop"}
        className={({ isActive }) =>
          isActive ? "bg-foreground text-background rounded-xl" : ""
        }
      >
        <motion.div className="px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl">
          Shop
        </motion.div>
      </NavLink>
    </motion.div>
  );
}
