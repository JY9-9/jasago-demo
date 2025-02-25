import Link from "next/link"
import { Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AgencyLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-10">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center">
              <Building2 className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl">마케팅 업체 로그인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" placeholder="name@company.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" />
            </div>
            <Link href="/dashboard/agency" className="w-full">
              <Button className="w-full" size="lg">
                로그인
              </Button>
            </Link>
            <div className="text-center text-sm">
              <Link href="/auth/agency/register" className="text-primary hover:underline">
                계정이 없으신가요? 회원가입
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

