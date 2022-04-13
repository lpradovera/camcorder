import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import  Header  from "../Header/Header";
const Header = React.lazy(() => import("../Header/Header"));
import { HeaderSceleton } from "../Header/HeaderSceleton";
import { OutletWrapper } from "../OutletWrapper/OutletWrapper";
import { AppWrapper } from "../AppWrapper/AppWrapper";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <AppWrapper>
      <Suspense fallback={<HeaderSceleton />}>
        <Header />
      </Suspense>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </AppWrapper>
  );
};
