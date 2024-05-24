import React, { createContext, useState, ReactNode } from "react";

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarContext = createContext({
  showSidebar: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleSidebar: (value?: boolean) => {},
});

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = (value?: boolean) => {
    if (value !== undefined) {
      setShowSidebar(value);
    } else {
      setShowSidebar((prevSidebar) => !prevSidebar);
    }
  };

  return (
    <SidebarContext.Provider value={{ showSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
