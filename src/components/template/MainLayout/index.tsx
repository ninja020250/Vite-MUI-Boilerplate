import React from "react";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <div>{children}</div>;
};

export default MainLayout;
