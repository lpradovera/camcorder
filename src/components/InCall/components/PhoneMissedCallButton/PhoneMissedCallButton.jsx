import React from "react";
import { PhoneMissedCall } from "../../../Icons/PhoneMissedCall/PhoneMissedCall";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Button } from "./components/Button/Button";
import { ButtonName } from "../ButtonName/ButtonName";

export const PhoneMissedCallButton = () => {
  return (
    <Wrapper>
      <Button>
        <PhoneMissedCall />
      </Button>
      <ButtonName name={"Leave"} />
    </Wrapper>
  );
};
