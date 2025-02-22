import { useState } from "react"
import type { MarketingService, ServiceCategory } from "../types"

interface UseServiceSearchProps {
  services: MarketingService[]
}

export function useServiceSearch({ services }: UseServiceSearchProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "전체">("전체")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "전체" || service.category === selectedCategory
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
  }

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    favorites,
    filteredServices,
    toggleFavorite,
  }
}
