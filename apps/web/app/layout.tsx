import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '자사고: 자영업자 살리기 프로젝트',
  description: '자사고는 자영업자를 위한 마케팅 플랫폼입니다',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
