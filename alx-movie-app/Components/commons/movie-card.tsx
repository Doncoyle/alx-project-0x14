import type React from "react"
import type { MovieProps } from "@/interfaces"

export const MovieCard: React.FC<MovieProps> = ({ title, image, year, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
        {year && <p className="text-sm text-gray-500 mt-1">{year}</p>}
        {description && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>}
      </div>
    </div>
  )
}
