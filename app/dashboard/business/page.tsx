"use client"

import type React from "react"

import { useState } from "react"
import { Heart, MessageSquare, Search, UserRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function BusinessDashboard() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [inquiry, setInquiry] = useState({
    message: "",
    budget: "",
    timeline: "",
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
  }

  const filteredServices = marketingServices.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">마케팅 서비스 찾기</h1>
            <p className="text-muted-foreground">원하시는 마케팅 서비스를 찾아보세요</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all" onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="인스타그램">인스타그램</SelectItem>
                <SelectItem value="블로그">블로그</SelectItem>
                <SelectItem value="유튜브">유튜브</SelectItem>
                <SelectItem value="스레드">스레드</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative flex-1 md:max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="검색어를 입력하세요" className="pl-9" value={searchQuery} onChange={handleSearch} />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <CardHeader className="border-b p-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  {service.title}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(service.id)}
                    className={favorites.includes(service.id) ? "text-red-500" : ""}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs">{service.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <p className="font-semibold">{service.price.toLocaleString()}원 부터</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{service.agency}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>문의하기</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>서비스 문의하기</DialogTitle>
                        <DialogDescription>
                          {service.agency}의 {service.title}에 대해 문의해보세요.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="message">문의 내용</Label>
                          <Textarea
                            id="message"
                            placeholder="궁금하신 점을 자세히 적어주세요."
                            value={inquiry.message}
                            onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="budget">예산</Label>
                            <Input
                              id="budget"
                              placeholder="예: 300만원"
                              value={inquiry.budget}
                              onChange={(e) => setInquiry({ ...inquiry, budget: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeline">희망 기간</Label>
                            <Input
                              id="timeline"
                              placeholder="예: 3개월"
                              value={inquiry.timeline}
                              onChange={(e) => setInquiry({ ...inquiry, timeline: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button
                          onClick={() => {
                            // 여기에 문의하기 로직 추가
                            setInquiry({ message: "", budget: "", timeline: "" })
                          }}
                        >
                          문의하기
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const marketingServices = [
  {
    id: 1,
    title: "인스타그램 마케팅 패키지",
    category: "인스타그램",
    description: "인플루언서 마케팅, 피드 관리, 스토리 제작을 한 번에",
    price: 300000,
    agency: "디지털마케팅 프로",
  },
  {
    id: 2,
    title: "블로그 체험단 마케팅",
    category: "블로그",
    description: "실제 체험을 바탕으로 한 진정성 있는 블로그 리뷰",
    price: 200000,
    agency: "블로그 마케팅 연구소",
  },
  {
    id: 3,
    title: "유튜브 숏츠 제작",
    category: "유튜브",
    description: "트렌디한 숏폼 콘텐츠로 브랜드 인지도 상승",
    price: 500000,
    agency: "크리에이티브 스튜디오",
  },
  {
    id: 4,
    title: "스레드 인플루언서 마케팅",
    category: "스레드",
    description: "신규 플랫폼을 통한 젊은 층 공략",
    price: 250000,
    agency: "뉴미디어 마케팅",
  },
]

