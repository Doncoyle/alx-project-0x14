import type React from "react"
import type { LoadingProps } from "@/interfaces"

export const Loading: React.FC<LoadingProps> = ({ fullScreen = false }) => {
  const spinnerElement = (
    <div className="flex items-center justify-center gap-2">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-100"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">{spinnerElement}</div>
    )
  }

  return spinnerElement
}
