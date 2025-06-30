import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import { getUserPhotos } from "@/api/photos"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import type { Photo } from "@/api/photos"
import dayjs from "dayjs"
import { addPhotoToAlbum } from "@/api/album"

interface GroupedPhotos {
  [date: string]: Photo[]
}

export default function AddToAlbumPage() {
  const navigate = useNavigate()
  const [photos, setPhotos] = useState<Photo[]>([])
  const [grouped, setGrouped] = useState<GroupedPhotos>({})
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const {albumId} = useParams()

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await getUserPhotos()
        setPhotos(res)
      } catch (err) {
        console.error("Failed to fetch photos", err)
      }
    }
    fetchPhotos()
  }, [])

  useEffect(() => {
    const group: GroupedPhotos = {}
    photos.forEach((photo) => {
      const date = dayjs(photo.createdAt).format("ddd, D MMM YYYY")
      if (!group[date]) group[date] = []
      group[date].push(photo)
    })
    setGrouped(group)
  }, [photos])

  const handleDone =async () => {
    console.log((selectedPhoto));
    
    if (!selectedPhoto || !albumId) return
    try {
        await addPhotoToAlbum(albumId,selectedPhoto);
        navigate(`/albums/${albumId}`)
    } catch (error) {
        console.error("Error adding photo to album:", error)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => navigate(-1)} className="text-white text-xl">←</button>
        <h2 className="text-xl font-medium">Select a photo</h2>
        <Button disabled={!selectedPhoto} onClick={handleDone}>Done</Button>
      </div>

      <div className="mb-6">
        <Input
          placeholder="Search your photos"
          className="bg-[#303134] border-none text-white"
        />
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).map(([date, photoList]) => (
          <div key={date}>
            <h3 className="text-sm mb-2 text-gray-400">{date}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {photoList.map((photo) => (
                <div
                  key={photo._id}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedPhoto(photo._id)}
                >
                  <img
                    src={photo.url}
                    alt=""
                    className={`w-full h-32 sm:h-36 object-cover rounded-md border ${
                      selectedPhoto === photo._id
                        ? "border-blue-500 ring-2 ring-blue-500"
                        : "border-transparent"
                    }`}
                  />
                  <div className="absolute top-1 left-1">
                    <Checkbox
                      checked={selectedPhoto === photo._id}
                      onCheckedChange={() => setSelectedPhoto(photo._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

