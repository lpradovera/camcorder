import React, { Suspense } from "react";
// import { GetStartedButton } from "./components/GetStartedButton/GetStartedButton";
import { Wrapper } from "./components/Wrapper/Wrapper";
const GetStartedButton = React.lazy(() =>
  import("./components/GetStartedButton/GetStartedButton")
);
const Header = React.lazy(() => import('./components/Header/Header'));
const Text = React.lazy(() => import('./components/Text/Text'));
import { TextSceleton } from "./components/TextSceleton/TextSceleton";
import { GetStartedButtonSceleton } from "./components/GetStartedButton/GetStartedButtonSceleton";
import { HeaderSceleton } from "./components/Header/HeaderSceleton";

export const Home = () => {
  return (
    <Wrapper>
      <Suspense fallback={<HeaderSceleton />}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<TextSceleton />}>
        <Text />
      </Suspense>

      <Suspense fallback={<GetStartedButtonSceleton />}>
        <GetStartedButton />
      </Suspense>
    </Wrapper>
  );
};
