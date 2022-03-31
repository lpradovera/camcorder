import { useState } from "react";

export const useHandleHide = () => {
  const [offset, setOffset] = useState(true);

  const handleHide = () => {
    if (!offset) {
      setOffset(true);
    } else {
      setOffset(false);
    }
  };
  return {
    handleHide,
    offset,
  };
};
