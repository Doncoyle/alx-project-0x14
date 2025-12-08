import type React from "react"
import type { FooterProps } from "@/interfaces"

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-gray-900 text-gray-300 py-8 mt-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">CineSeek</h4>
            <p className="text-sm text-gray-400">Discover and explore movies from around the world.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/movies" className="hover:text-blue-400 transition-colors">
                  Movies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <p className="text-sm text-gray-400">Powered by MoviesDatabase API</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} CineSeek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
