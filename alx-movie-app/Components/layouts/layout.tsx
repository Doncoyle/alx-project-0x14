import type React from "react"
import type { LayoutProps } from "@/interfaces"
import { Header } from "./header"
import { Footer } from "./footer"

export const Layout: React.FC<LayoutProps> = ({ children, currentPage = "home" }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentPage={currentPage} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}
