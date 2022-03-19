import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { OutletWrapper } from "../OutletWrapper/OutletWrapper";
import { AppWrapper } from '../AppWrapper/AppWrapper';
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <AppWrapper>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </AppWrapper>
  );
};
