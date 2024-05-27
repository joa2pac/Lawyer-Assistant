import { NavLink } from "react-router-dom";
import { FC, useContext } from "react";
import { SidebarContext } from "../../../core/contexts/sidebarContext";

interface SidebarMenuProps {
  key: string;
  to: string;
  icon: string;
  title: string;
  description: string;
}
export const SidebarMenuItem: FC<SidebarMenuProps> = ({ to, icon, title, description }) => {
  const { showSidebar } = useContext(SidebarContext);
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex justify-center items-center  rounded-md p-2 transition-colors"
          : "flex justify-center items-center hover:bg-gray-900 rounded-md p-2 transition-colors"
      }
    >
      <i className={`${icon} text-2xl ${showSidebar && "mr-4"} text-red-700`}></i>
      <div className="flex flex-col flex-grow">
        {showSidebar && (
          <>
            <span className="text-white text-lg font-semibold  whitespace-nowrap">{title}</span>
            <span className="text-gray-400 text-sm  whitespace-nowrap ">{description}</span>
          </>
        )}
      </div>
    </NavLink>
  );
};
