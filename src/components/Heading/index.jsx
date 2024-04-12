import React from "react";

const sizes = {
  s: "text-lg font-semibold",
  xs: "text-[13px] font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-400 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
