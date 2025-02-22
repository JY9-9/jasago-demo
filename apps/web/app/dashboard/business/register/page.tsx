"use client"

import { ServiceForm } from "../components/ServiceForm"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-8">
      <div className="container mx-auto max-w-2xl px-4">
        <ServiceForm />
      </div>
    </div>
  )
}
