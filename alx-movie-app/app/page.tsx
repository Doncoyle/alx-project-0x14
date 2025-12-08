import { Header } from "@/components/layouts/header"
import { Footer } from "@/components/layouts/footer"
import { Button } from "@/components/commons/button"
import Link from "next/link"

export const metadata = {
  title: "CineSeek - Discover Your Next Favorite Movie",
  description: "Explore thousands of movies from around the world with CineSeek",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentPage="home" />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Discover Your Next Favorite Movie</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore thousands of movies from around the world. Find ratings, reviews, and detailed information about
              your favorite films.
            </p>
          </div>

          <Link href="/movies">
            <Button variant="primary">Start Exploring</Button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-600">Movies in our database</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">IMDb</div>
              <p className="text-gray-600">Powered by reliable data</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">Fast</div>
              <p className="text-gray-600">Search instantly</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
