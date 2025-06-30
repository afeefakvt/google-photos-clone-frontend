"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface FeaturedItem {
  title: string
  subtitle?: string
  image: string
  type: string
}

export default function FeaturedItems() {
  const featuredItems: FeaturedItem[] = [
    {
      title: "Throwback video",
      image: "/placeholder.svg?height=200&width=300",
      type: "video",
    },
    {
      title: "Memories together",
      subtitle: "Jun - Aug 2023",
      image: "/placeholder.svg?height=200&width=300",
      type: "memory",
    },
    {
      title: "2 years since...",
      image: "/placeholder.svg?height=200&width=300",
      type: "anniversary",
    },
    {
      title: "Spotlight on a day",
      image: "/placeholder.svg?height=200&width=300",
      type: "spotlight",
    },
  ]

  return (
    
    <div className="mb-6 sm:mb-8">
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-1">
        {featuredItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 relative group cursor-pointer">
            <div className="w-56 sm:w-64 lg:w-72 h-32 sm:h-40 lg:h-48 bg-gray-700 rounded-lg overflow-hidden">
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <h3 className="text-white font-medium text-sm sm:text-base lg:text-lg">{item.title}</h3>
                {item.subtitle && <p className="text-gray-300 text-xs sm:text-sm">{item.subtitle}</p>}
              </div>
            </div>
          </div>
        ))}
        <Button
          variant="ghost"
          className="flex-shrink-0 w-8 sm:w-10 lg:w-12 h-32 sm:h-40 lg:h-48 text-gray-400 hover:bg-gray-700"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        </Button>
      </div>
    </div>
  )
}