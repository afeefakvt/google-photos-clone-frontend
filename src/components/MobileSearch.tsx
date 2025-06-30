"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useSearch } from "@/contexts/SearchContext"


export default function MobileSearch() {
    const { search, setSearch } = useSearch()

  return (
    <div className="lg:hidden mb-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search your photos "
          className="pl-10 bg-[#303134] border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 text-sm"
            value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
