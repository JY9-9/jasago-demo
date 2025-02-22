import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceInquiryDialog } from "./ServiceInquiryDialog"
import type { MarketingService } from "../types"

interface ServiceCardProps {
  service: MarketingService
  isFavorite: boolean
  onFavoriteToggle: (id: number) => void
}

export function ServiceCard({ service, isFavorite, onFavoriteToggle }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden max-w-3xl mx-auto w-full">
      <CardHeader className="border-b p-4">
        <CardTitle className="flex items-center justify-between text-lg">
          {service.title}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onFavoriteToggle(service.id)}
            className={isFavorite ? "text-red-500" : ""}
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
          <ServiceInquiryDialog service={service} />
        </div>
      </CardContent>
    </Card>
  )
}
