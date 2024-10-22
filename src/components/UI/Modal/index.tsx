import React, { useEffect, useRef } from "react";

type propsType = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: propsType) => {
  const ref = useRef<HTMLElement | any>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen min-w-screen bg-black bg-opacity-50">
      <div
        ref={ref}
        className={`no-scrollbar max-h-[80vh] w-[80vw] overflow-y-scroll rounded-md bg-white p-5 shadow-md transition-all sm:overflow-auto xl:max-h-[80vh] lg:w-[40vw]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
