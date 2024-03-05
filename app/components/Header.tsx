import { Link, NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <nav className="bg-background text-foreground sticky top-2 z-30 mx-auto rounded-lg shadow-lg shadow-slate-300 px-1 py-2 mt-2 max-w-[500px]">
      <ul className="flex items-center justify-between">
        <ModeToggle />
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "bg-foreground text-background rounded-lg" : ""
          }
        >
          <li className="px-2 py-1 text-sm">About</li>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-foreground text-background rounded-lg" : ""
          }
        >
          <li className="px-2 py-1 rounded-lg text-lg">ED</li>
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive ? "bg-foreground text-background rounded-lg" : ""
          }
        >
          <li className="px-2 py-1 rounded-lg text-sm">Shop</li>
        </NavLink>
        <li className="px-2 py-1">
          <User size={16} />
        </li>
      </ul>
    </nav>
  );
}

{
  /* <motion.div className="sticky z-20 bg-white top-2 mx-auto inset-x-0 p-1 shadow-md shadow-slate-200 rounded-xl flex gap-x-1 items-center justify-between">
<motion.div
  className={
    "px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl"
  }
>
  <Link to={"/theme"}>
    <Sun size={16} />
  </Link>
</motion.div>

<motion.div
  className={
    "px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl text-sm"
  }
>
  <NavLink
    to={"/about"}
    className={({ isActive }) =>
      isActive ? "bg-foreground text-background rounded-xl w-full" : ""
    }
  >
    About
  </NavLink>
</motion.div>

<motion.div className="px-4 py-1 text-xl font-semibold hover:bg-slate-700 hover:text-background rounded-xl">
  <NavLink
    to={"/"}
    className={({ isActive }) =>
      isActive ? "bg-foreground text-background rounded-xl" : ""
    }
  >
    ED
  </NavLink>
</motion.div>

<motion.div className="px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl text-sm">
  <NavLink
    to={"/shop"}
    className={({ isActive }) =>
      isActive ? "bg-foreground text-background rounded-xl" : ""
    }
  >
    Shop
  </NavLink>
</motion.div>
<NavLink
  to={"/login"}
  className={({ isActive }) =>
    isActive ? "bg-foreground text-background rounded-xl" : ""
  }
>
  <motion.div className="px-4 py-1 font-semibold hover:bg-slate-700 hover:text-background rounded-xl">
    <User size={16} />
  </motion.div>
</NavLink>
</motion.div> */
}
