"use client"

import { useEffect } from "react"
import { Heart, MessageSquare, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchHeader } from "./components/SearchHeader"
import { ServiceCard } from "./components/ServiceCard"
import { useServiceSearch } from "./hooks/useServiceSearch"
import { useServices } from "./hooks/useServices"

export default function BusinessDashboard() {
  const { services, loading, error, fetchServices } = useServices()
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    favorites,
    filteredServices,
    toggleFavorite,
  } = useServiceSearch({ services })

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-semibold">
            <UserRound className="h-5 w-5" />
            마케팅 플랫폼
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" className="gap-2">
              <Heart className="h-4 w-4" />
              관심 서비스 {favorites.length}
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex-1">
            <SearchHeader
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
            />
          </div>
        </div>

        <div className="grid gap-4">
          {loading ? (
            <div>로딩 중...</div>
          ) : error ? (
            <div>에러: {error}</div>
          ) : filteredServices.length === 0 ? (
            <div>등록된 서비스가 없습니다.</div>
          ) : filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isFavorite={favorites.includes(service.id)}
              onFavoriteToggle={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
