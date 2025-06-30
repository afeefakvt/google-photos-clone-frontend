"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, Plus, HelpCircle, Settings, Grid3X3 } from "lucide-react"
import CreateModal from "./Modal"
import { useSearch } from "@/contexts/SearchContext"


interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const { search, setSearch } = useSearch()


  return (
    <header className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700">
      <div className="flex items-center gap-2 sm:gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden text-white hover:bg-gray-700 p-1 sm:p-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <h1 className="text-lg sm:text-xl font-normal">Google Photos</h1>
      </div>

      {/* Desktop Search */}
      <div className="flex-1 max-w-2xl mx-4 hidden lg:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search your photos"
            className="pl-10 bg-[#303134] border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
             value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-1 sm:gap-2">
        <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-gray-700 p-1 sm:p-2">
          <Search className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        {/* Desktop Icons */}
        <Button variant="ghost" size="sm"className="text-white hover:bg-gray-700 p-1 sm:p-2"
        onClick={() => setShowCreateModal(true)}
>
          <Plus className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700 hidden lg:flex">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700 hidden lg:flex">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700 hidden lg:flex">
          <Grid3X3 className="h-5 w-5" />
        </Button>

        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
          A
        </div>
      </div>
            <CreateModal isOpen={showCreateModal} onClose={() => setShowCreateModal(false)} />

    </header>
  )
}