import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ServiceCategory } from "../types"

interface SearchHeaderProps {
  selectedCategory: ServiceCategory | "전체"
  searchQuery: string
  onCategoryChange: (value: ServiceCategory | "전체") => void
  onSearchChange: (value: string) => void
}

export function SearchHeader({
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: SearchHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">마케팅 서비스 찾기</h1>
        <p className="text-muted-foreground">원하시는 마케팅 서비스를 찾아보세요</p>
      </div>
      <div className="flex gap-2">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="전체">전체</SelectItem>
            <SelectItem value="인스타그램">인스타그램</SelectItem>
            <SelectItem value="블로그">블로그</SelectItem>
            <SelectItem value="유튜브">유튜브</SelectItem>
            <SelectItem value="스레드">스레드</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="검색어를 입력하세요"
            className="pl-9"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
