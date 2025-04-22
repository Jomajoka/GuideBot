"use client"

import { MapPinned, Map, TentTree } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* GuideBot title */}
        <h1 className="text-2xl font-bold text-[#0a5e0d] flex items-center space-x-2">
          <MapPinned className="w-8 h-8" />
          <span>GuideBot</span>
        </h1>

        {/* Plan and Explore options */}
        <div className="flex items-center space-x-6">
          {/* Plan */}
          <Link
            href="/plan"
            className="flex items-center space-x-1 cursor-pointer hover:text-[#111] transition-all text-[#0a5e0d]"
          >
            <Map className="w-5 h-5" />
            <span>Plan</span>
          </Link>

          {/* Explore */}
          <Link
            href="/explore"
            className="flex items-center space-x-1 cursor-pointer hover:text-[#111] transition-all text-[#0a5e0d]"
          >
            <TentTree className="w-5 h-5" />
            <span>Explore</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
