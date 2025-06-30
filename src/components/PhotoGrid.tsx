"use client"
import { useEffect, useState } from "react"
import { getUserPhotos, searchPhotos } from "@/api/photos"
import type { Photo } from "@/api/photos"
import MobileSearch from "@/components/MobileSearch"
import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"
import { useSearch } from "@/contexts/SearchContext"
import PhotoFilters from "@/components/PhotoFilter" 

interface GroupedPhotos {
  [date: string]: Photo[]
}

export default function PhotoGrid() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [grouped, setGrouped] = useState<GroupedPhotos>({})
  const { search } = useSearch()
  const navigate = useNavigate()

  const fetchFilteredPhotos = async (filters = {}) => {
    try {
      const res = await searchPhotos(filters)
      setPhotos(res)
    } catch (err) {
      console.error("Failed to filter photos", err)
    }
  }

  useEffect(() => {
    fetchFilteredPhotos({ search }) // on initial mount or when search changes
  }, [search])

  useEffect(() => {
    const group: GroupedPhotos = {}
    photos.forEach((photo) => {
      const date = dayjs(photo.createdAt).format("ddd, D MMM YYYY")
      if (!group[date]) group[date] = []
      group[date].push(photo)
    })
    setGrouped(group)
  }, [photos])

  return (
    <>
      <MobileSearch />

      <PhotoFilters onApply={fetchFilteredPhotos} />

      {Object.keys(grouped).length > 0 ? (
        Object.entries(grouped).map(([date, photoList]) => (
          <div key={date} className="mb-6">
            <h2 className="text-xl sm:text-2xl font-normal mb-4 sm:mb-6">{date}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {photoList.map((photo) => (
                <div
                  key={photo._id}
                  className="bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity aspect-[3/4]"
                  onClick={() => navigate(`/photos/${photo._id}`)}
                >
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={`Photo from ${date}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No photos found.</p>
      )}
    </>
  )
}
