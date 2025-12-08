import type React from "react"
// TypeScript interfaces for CineSeek components and API responses

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: "primary" | "secondary"
  className?: string
}

export interface LoadingProps {
  fullScreen?: boolean
}

export interface MovieProps {
  id: string
  title: string
  image: string
  imdbID: string
  description?: string
  year?: number
}

export interface MoviesProps {
  movies: MovieProps[]
  isLoading: boolean
  error?: string | null
}

export interface HeaderProps {
  currentPage?: "home" | "movies"
}

export interface FooterProps {
  className?: string
}

export interface LayoutProps {
  children: React.ReactNode
  currentPage?: "home" | "movies"
}

export interface FetchMoviesResponse {
  results?: Array<{
    "#RANK": string
    "#IMG_POSTER": string
    "#ACTORS": string
    "#IMDB_ID": string
    "#TITLE": string
    "#YEAR": number
    "#IMAGE": string
    description?: string
  }>
  errorMessage?: string
}

export interface FetchMoviesRequest {
  searchTerm?: string
  year?: number
  genre?: string
  page?: number
}
