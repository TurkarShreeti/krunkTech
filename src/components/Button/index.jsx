import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    blue_A200: "bg-blue-A200",
    gray_50_02: "bg-gray-50_02 text-blue-A200",
    gray_100_01: "bg-gray-100_01 text-gray-600",
  },
};
const sizes = {
  md: "h-[40px] px-3",
  sm: "h-[30px] px-2.5 text-[13px]",
  xs: "h-[24px] px-2.5 text-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_100_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_A200", "gray_50_02", "gray_100_01"]),
};

export { Button };
