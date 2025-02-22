"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { NewService, ServiceCategory } from "../types"

export function ServiceForm() {
  const router = useRouter()
  const [service, setService] = useState<NewService>({
    title: "",
    category: "인스타그램",
    description: "",
    price: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 연동
    console.log("서비스 등록:", service)
    router.push("/dashboard/business")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>새 마케팅 서비스 등록</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">서비스명</Label>
            <Input
              id="title"
              value={service.title}
              onChange={(e) => setService({ ...service, title: e.target.value })}
              placeholder="예: 인스타그램 마케팅 패키지"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">카테고리</Label>
            <Select
              value={service.category}
              onValueChange={(value: ServiceCategory) =>
                setService({ ...service, category: value })
              }
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="인스타그램">인스타그램</SelectItem>
                <SelectItem value="블로그">블로그</SelectItem>
                <SelectItem value="유튜브">유튜브</SelectItem>
                <SelectItem value="스레드">스레드</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">서비스 설명</Label>
            <Textarea
              id="description"
              value={service.description}
              onChange={(e) => setService({ ...service, description: e.target.value })}
              placeholder="서비스에 대한 상세한 설명을 입력하세요"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">가격 (원)</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="10000"
              value={service.price}
              onChange={(e) => setService({ ...service, price: Number(e.target.value) })}
              placeholder="예: 300000"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/business")}
            >
              취소
            </Button>
            <Button type="submit">등록하기</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
