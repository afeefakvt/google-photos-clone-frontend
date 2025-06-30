"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPhotosInAlbum } from "@/api/album"
import type { Photo } from "@/api/photos"
import MobileSearch from "@/components/MobileSearch"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"


interface AlbumPhotosProps {
  albumId: string
}

export default function AlbumPhotos({ albumId }: AlbumPhotosProps) {
  const [photos, setPhotos] = useState<Photo[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAlbumPhotos = async () => {
      try {
        const res = await getPhotosInAlbum(albumId)        
        setPhotos(res.photos) // assuming response is { album, photo[] }
      } catch (err) {
        console.error("Failed to load album photos", err)
      }
    }

    fetchAlbumPhotos()
  }, [albumId])

  return (
    <>
      <MobileSearch />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Album Photos</h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-gray-700"
          onClick={() => navigate(`/albums/${albumId}/addPhotos`)}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
      {photos.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {photos.map((photo) => (
            <div
              key={photo._id}
              className="bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity aspect-[3/4]"
              onClick={() => navigate(`/photos/${photo._id}`)}
            >
              <img
                src={photo.url || "/placeholder.svg"}
                alt="Album photo"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No photos in this album.</p>
      )}
    </>
  )
}

