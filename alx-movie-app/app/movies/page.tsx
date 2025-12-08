"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Header } from "@/components/layouts/header"
import { Footer } from "@/components/layouts/footer"
import { MovieCard } from "@/components/commons/movie-card"
import { Loading } from "@/components/commons/loading"
import { Button } from "@/components/commons/button"
import type { MovieProps } from "@/interfaces"

export default function MoviesPage() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("popular")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/fetch-movies?searchTerm=${encodeURIComponent(searchTerm)}`)

        if (!response.ok) {
          throw new Error("Failed to fetch movies")
        }

        const data = await response.json()
        setMovies(data.data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        setMovies([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [searchTerm])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const term = formData.get("search") as string
    if (term.trim()) {
      setSearchTerm(term)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentPage="movies" />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Movies</h1>
            <p className="text-lg text-gray-600">
              Search our extensive database of movies and discover your next favorite film.
            </p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-4">
            <input
              type="text"
              name="search"
              placeholder="Search movies, actors, genres..."
              defaultValue={searchTerm}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button variant="primary">Search</Button>
          </form>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loading />
            </div>
          ) : movies.length > 0 ? (
            <div>
              <p className="text-gray-600 mb-6">Found {movies.length} movies</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    imdbID={movie.imdbID}
                    year={movie.year}
                    description={movie.description}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No movies found. Try a different search term.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
