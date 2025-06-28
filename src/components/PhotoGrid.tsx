"use client"

import MobileSearch from "@/components/MobileSearch"

interface PhotoDay {
  date: string
  photos: string[]
}

export default function PhotoGrid() {
  const decemberPhotos: PhotoDay[] = [
    {
      date: "Sun, 24 Dec 20...",
      photos: ["/placeholder.svg?height=150&width=120"],
    },
    {
      date: "Thu, 21 Dec 20...",
      photos: ["/placeholder.svg?height=150&width=120"],
    },
    {
      date: "Tue, 12 Dec 20...",
      photos: ["/placeholder.svg?height=150&width=120"],
    },
    {
      date: "Sun, 10 Dec 20...",
      photos: ["/placeholder.svg?height=150&width=120"],
    },
  ]

  return (
    <>
      <MobileSearch />

      <div>
        <h2 className="text-xl sm:text-2xl font-normal mb-4 sm:mb-6">December 2023</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {decemberPhotos.map((day, index) => (
            <div key={index}>
              <h3 className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 truncate">{day.date}</h3>
              <div className="space-y-2">
                {day.photos.map((photo, photoIndex) => (
                  <div
                    key={photoIndex}
                    className="bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity aspect-[3/4]"
                  >
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Photo from ${day.date}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}