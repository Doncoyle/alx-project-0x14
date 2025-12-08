import type React from "react"
import Link from "next/link"
import type { HeaderProps } from "@/interfaces"

export const Header: React.FC<HeaderProps> = ({ currentPage = "home" }) => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          CineSeek
        </Link>
        <nav className="flex gap-6 items-center">
          <Link
            href="/"
            className={`transition-colors ${
              currentPage === "home" ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/movies"
            className={`transition-colors ${
              currentPage === "movies" ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Explore Movies
          </Link>
        </nav>
      </div>
    </header>
  )
}
