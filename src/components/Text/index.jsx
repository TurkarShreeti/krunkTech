import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-[15px] font-medium",
  s: "text-xs font-normal",
  md: "text-[13px] font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
