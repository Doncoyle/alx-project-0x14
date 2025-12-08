import type { NextRequest } from "next/server"
import type { FetchMoviesResponse, MovieProps } from "@/interfaces"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const searchTerm = searchParams.get("searchTerm") || "popular"

    const apiKey = process.env.MOVIE_API_KEY

    if (!apiKey) {
      return Response.json({ error: "MOVIE_API_KEY environment variable is not set" }, { status: 500 })
    }

    const url = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${encodeURIComponent(searchTerm as string)}`

    const response = await fetch(url)
    const data: FetchMoviesResponse = await response.json()

    if (data.errorMessage) {
      return Response.json({ error: data.errorMessage }, { status: 400 })
    }

    if (!data.results) {
      return Response.json({ data: [] }, { status: 200 })
    }

    const movies: MovieProps[] = data.results.map((movie) => ({
      id: movie["#IMDB_ID"] || "",
      title: movie["#TITLE"] || "Unknown",
      image: movie["#IMG_POSTER"] || "/placeholder.svg",
      imdbID: movie["#IMDB_ID"] || "",
      year: movie["#YEAR"] || new Date().getFullYear(),
      description: movie.description || "",
    }))

    return Response.json({ data: movies }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return Response.json({ error: error instanceof Error ? error.message : "Failed to fetch movies" }, { status: 500 })
  }
}
