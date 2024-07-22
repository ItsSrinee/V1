import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-12">
      <a href="mailto:srineevasan511@gmail.com">
        <p className="text-sm rotate-90 w-80 tracking-widest text-designColor/80 hover:text-designColor duration-200">
          srineevasan511@gmail.com
        </p>
      </a>
      <div className="w-[1px] h-32 bg-darkText" />
    </div>
  );
};

export default RightSide;
