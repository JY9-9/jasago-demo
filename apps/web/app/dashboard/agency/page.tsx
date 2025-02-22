"use client"

import { useEffect, useState } from "react"
import { BarChart3, Building2, MessageSquare, Plus, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useServices } from "./hooks/useServices"
import { Service, ServiceCategory } from "./types"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function AgencyDashboard() {
  // 실제 데이터베이스에 존재하는 agency ID로 변경
  const tempAgencyId = "34c801fd-bedb-4df5-9566-96d08ee35937"  // 이 값은 당신의 데이터베이스에 있는 실제 Agency ID로 교체해야 합니다
  const { services, loading, error, fetchServices, createService, updateService, deleteService } = useServices(tempAgencyId)

  useEffect(() => {
    fetchServices()
  }, [])

  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      businessName: "카페 달미",
      service: "인스타그램 마케팅 패키지",
      message: "가격 및 진행 기간 문의드립니다.",
      status: "new",
      date: "2024-02-21",
    },
    {
      id: 2,
      businessName: "레스토랑 한스",
      service: "블로그 체험단 마케팅",
      message: "체험단 인원 조정 가능한가요?",
      status: "replied",
      date: "2024-02-20",
    },
  ])

  const [newService, setNewService] = useState({
    title: "",
    category: ServiceCategory.MARKETING,
    price: "",
    description: "",
    published: false,
  })
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [formError, setFormError] = useState("")

  const validateForm = (service: { title: string; category: ServiceCategory; price: string | number; description: string }) => {
    if (!service.title.trim()) return "서비스명을 입력해주세요."
    if (!service.category) return "카테고리를 선택해주세요."
    if (!service.price) return "가격을 입력해주세요."
    if (!service.description.trim()) return "서비스 설명을 입력해주세요."
    return ""
  }

  const handleAddService = async () => {
    const error = validateForm(newService)
    if (error) {
      setFormError(error)
      return
    }
    try {
      await createService({
        title: newService.title,
        category: newService.category,
        price: Number(newService.price),
        description: newService.description,
      })
      setNewService({
        title: "",
        category: ServiceCategory.MARKETING,
        price: "",
        description: "",
        published: false
      })
    } catch (err) {
      console.error("Failed to create service:", err)
    }
  }

  const handleEditService = async () => {
    if (!editingService) return
    
    const error = validateForm(editingService)
    if (error) {
      setFormError(error)
      return
    }

    try {
      await updateService(editingService.id, {
        title: editingService.title,
        category: editingService.category,
        price: Number(editingService.price),
        description: editingService.description,
      })
      setEditingService(null)
    } catch (err) {
      console.error("Failed to update service:", err)
    }
  }

  const handleDeleteService = async (id: string) => {
    try {
      await deleteService(id)
    } catch (err) {
      console.error("Failed to delete service:", err)
    }
  }

  const handleReplyInquiry = (id: number) => {
    setInquiries(inquiries.map((inquiry) => (inquiry.id === id ? { ...inquiry, status: "replied" } : inquiry)))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <Building2 className="h-5 w-5" />
            마케팅 플랫폼
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6">
        <div className="container">
          <h1 className="mb-8 text-3xl font-bold">대시보드</h1>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">이번 달 매출</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">￦4,231,000</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">신규 문의</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{inquiries.filter((i) => i.status === "new").length}</div>
                <p className="text-xs text-muted-foreground">최근 24시간</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">활성 서비스</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{services.length}</div>
                <p className="text-xs text-muted-foreground">현재 운영 중</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="services" className="mt-6">
            <TabsList>
              <TabsTrigger value="services">서비스 관리</TabsTrigger>
              <TabsTrigger value="inquiries">문의 관리</TabsTrigger>
            </TabsList>
            <TabsContent value="services" className="space-y-4">
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />새 서비스 등록
                    </Button>
                  </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>새 서비스 등록</DialogTitle>
                        <DialogDescription>새로운 마케팅 서비스를 등록하세요.</DialogDescription>
                      </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">서비스명</Label>
                        <Input
                          id="title"
                          value={newService.title}
                          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                          className={!newService.title ? "border-red-500" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>카테고리</Label>
                        <Select onValueChange={(value) => setNewService({ ...newService, category: value as ServiceCategory })}>
                          <SelectTrigger className={!newService.category ? "border-red-500" : ""}>
                            <SelectValue placeholder="카테고리 선택" />
                          </SelectTrigger>
                          <SelectContent>
                          <SelectItem value="MARKETING">마케팅</SelectItem>
                          <SelectItem value="DEVELOPMENT">개발</SelectItem>
                          <SelectItem value="DESIGN">디자인</SelectItem>
                          <SelectItem value="CONSULTING">컨설팅</SelectItem>
                          <SelectItem value="OTHER">기타</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price">가격</Label>
                        <Input
                          id="price"
                          type="number"
                          value={newService.price}
                          onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                          className={!newService.price ? "border-red-500" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">서비스 설명</Label>
                        <Textarea
                          id="description"
                          value={newService.description}
                          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                          className={!newService.description ? "border-red-500" : ""}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      {formError && (
                        <p className="text-sm text-red-500 animate-shake">{formError}</p>
                      )}
                      <Button onClick={handleAddService}>등록하기</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-4">
                {loading ? (
                  <div>로딩 중...</div>
                ) : error ? (
                  <div>에러: {error}</div>
                ) : services.length === 0 ? (
                  <div>등록된 서비스가 없습니다.</div>
                ) : (
                  services.map((service) => (
                    <Card key={service.id}>
                      <CardContent className="flex items-center justify-between p-6">
                        <div className="space-y-1">
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {service.category} · {service.price.toLocaleString()}원
                        </p>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" onClick={() => setEditingService(service)}>수정</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>서비스 수정</DialogTitle>
                              <DialogDescription>서비스 정보를 수정하세요.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="edit-title">서비스명</Label>
                                <Input
                                  id="edit-title"
                                  value={editingService?.title}
                                  onChange={(e) => setEditingService(prev => prev ? {...prev, title: e.target.value} : null)}
                                  className={!editingService?.title ? "border-red-500" : ""}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>카테고리</Label>
                                <Select
                                  value={editingService?.category}
                                  onValueChange={(value) => setEditingService(prev => prev ? {...prev, category: value as ServiceCategory} : null)}
                                >
                                  <SelectTrigger className={!editingService?.category ? "border-red-500" : ""}>
                                    <SelectValue placeholder="카테고리 선택" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="MARKETING">마케팅</SelectItem>
                                    <SelectItem value="DEVELOPMENT">개발</SelectItem>
                                    <SelectItem value="DESIGN">디자인</SelectItem>
                                    <SelectItem value="CONSULTING">컨설팅</SelectItem>
                                    <SelectItem value="OTHER">기타</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-price">가격</Label>
                                <Input
                                  id="edit-price"
                                  type="number"
                                  value={editingService?.price}
                                  onChange={(e) => setEditingService(prev => prev ? {...prev, price: Number(e.target.value)} : null)}
                                  className={!editingService?.price ? "border-red-500" : ""}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-description">서비스 설명</Label>
                                <Textarea
                                  id="edit-description"
                                  value={editingService?.description}
                                  onChange={(e) => setEditingService(prev => prev ? {...prev, description: e.target.value} : null)}
                                  className={!editingService?.description ? "border-red-500" : ""}
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                              {formError && (
                                <p className="text-sm text-red-500 animate-shake">{formError}</p>
                              )}
                              <Button onClick={handleEditService}>수정하기</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="destructive" onClick={() => handleDeleteService(service.id)}>
                          삭제
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  ))
                )}
              </div>
            </TabsContent>
            <TabsContent value="inquiries" className="space-y-4">
              {inquiries.map((inquiry) => (
                <Card key={inquiry.id}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{inquiry.businessName}</h3>
                        {inquiry.status === "new" && (
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{inquiry.service}</p>
                      <p className="text-sm">{inquiry.message}</p>
                      <p className="text-xs text-muted-foreground">{inquiry.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">답변하기</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>문의 답변하기</DialogTitle>
                            <DialogDescription>{inquiry.businessName}님의 문의에 답변해주세요.</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label>문의 내용</Label>
                              <p className="text-sm">{inquiry.message}</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="reply">답변</Label>
                              <Textarea id="reply" placeholder="답변을 입력하세요..." />
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <Button onClick={() => handleReplyInquiry(inquiry.id)}>답변 보내기</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
