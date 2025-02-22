import Link from "next/link"
import { Building2, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-10">
        <h1 className="mb-8 text-center text-4xl font-bold text-white md:text-5xl">
          마케팅 플랫폼에 오신 것을 환영합니다
        </h1>
        <p className="mb-12 text-center text-lg text-zinc-400">계정 유형을 선택하여 시작하세요</p>
        <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
          <Card className="relative overflow-hidden transition-all hover:shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Building2 className="h-6 w-6" />
                마케팅 업체
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <p className="text-center text-muted-foreground">마케팅 서비스를 제공하고 고객을 만나보세요</p>
              <Link href="/auth/agency" className="w-full">
                <Button className="w-full" size="lg">
                  마케팅 업체로 로그인
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden transition-all hover:shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <UserRound className="h-6 w-6" />
                사업자/자영업자
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <p className="text-center text-muted-foreground">최적의 마케팅 파트너를 찾아보세요</p>
              <Link href="/auth/business" className="w-full">
                <Button className="w-full" size="lg">
                  사업자로 로그인
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

