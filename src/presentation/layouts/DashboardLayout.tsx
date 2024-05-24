import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { SidebarContext } from "../../core/contexts/sidebarContext";
import { menuRoutes } from "../router/router";
import { SidebarMenuItem } from "../components/sidebar/SidebarMenuItem";

export const DashboardLayout = () => {
  const { toggleSidebar, showSidebar } = useContext(SidebarContext);
  return (
    <main className="flex flex-row z-20">
      <div
        className={`border-r  ${showSidebar ? "w-[370px]" : " w-14"} transition-all duration-300`}
        onMouseEnter={() => toggleSidebar(true)}
        onMouseLeave={() => toggleSidebar(false)}
      >
        <nav
          className={`hidden sm:flex flex-col min-h-screen bg-opacity-10 py-5  px-2  transition-all duration-300 ease-in-out`}
        >
          {showSidebar ? (
            <>
              <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br whitespace-nowrap from-white via-white/50 bg-clip-text text-transparent z-10">
                The Lawyer
                <span className="text-red-700">.</span>
              </h1>
              <div className="border-gray-700 border my-3" />
            </>
          ) : (
            <>
              <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br whitespace-nowrap from-white via-white/50 bg-clip-text text-transparent z-10">
                TL
              </h1>
              <div className="border-gray-700 border my-3" />
            </>
          )}

          {/* Opciones del menú */}
          {menuRoutes.map((option) => (
            <SidebarMenuItem key={option.to} {...option} />
          ))}
        </nav>
      </div>

      <section className="mx-3 sm:mx-20 mt-4 flex flex-col w-full h-[calc(100vh-50px)] bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};
