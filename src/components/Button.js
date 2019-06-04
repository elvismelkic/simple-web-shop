import React from "react";

export default function Button({
  fill,
  parent,
  children,
  isDisabled,
  clickFunction
}) {
  return (
    <button
      className={
        isDisabled
          ? `btn btn--${fill} btn--${parent} btn--disabled`
          : `btn btn--${fill} btn--${parent}`
      }
      onClick={clickFunction}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
