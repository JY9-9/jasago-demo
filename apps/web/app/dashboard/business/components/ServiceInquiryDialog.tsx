import { useState } from "react"
import { Button } from "@/components/ui/button"
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
import { Textarea } from "@/components/ui/textarea"
import type { MarketingService, ServiceInquiry } from "../types"

interface ServiceInquiryDialogProps {
  service: MarketingService
}

export function ServiceInquiryDialog({ service }: ServiceInquiryDialogProps) {
  const [inquiry, setInquiry] = useState<ServiceInquiry>({
    message: "",
    budget: "",
    timeline: "",
  })

  const handleSubmit = () => {
    // TODO: Implement inquiry submission
    setInquiry({ message: "", budget: "", timeline: "" })
  }

  return (
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
          <Button onClick={handleSubmit}>문의하기</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
