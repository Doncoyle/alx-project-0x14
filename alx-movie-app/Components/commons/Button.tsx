"use client"

import type React from "react"
import type { ButtonProps } from "@/interfaces"

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  const baseClasses = "px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer"

  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100"

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  )
}
