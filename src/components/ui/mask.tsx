"use client";

import React from "react";

interface MaskProps {
  isVisible: boolean; // Control visibility
  onClick: () => void; // Callback for mask click
  className?: string; // Custom styles
  children?: React.ReactNode; // Optional content inside the mask
}

const Mask: React.FC<MaskProps> = ({
  isVisible,
  onClick,
  className = "",
  children,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[2500] bg-black/50 transition-opacity duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Mask;
