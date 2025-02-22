import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RegisterButton() {
  return (
    <Link href="/dashboard/business/register">
      <Button className="gap-2">
        <Plus className="h-4 w-4" />
        새 공고 등록
      </Button>
    </Link>
  )
}
