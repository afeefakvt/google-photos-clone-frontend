import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Info, Star, Trash2, MoreVertical } from "lucide-react"
import InfoModal from "@/components/InfoModal"
import { getPhotoById } from "@/api/photos"
import type { Photo } from "@/api/photos"

export default function PhotoPreview() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [photo, setPhoto] = useState<Photo | null>(null)
  const [infoOpen, setInfoOpen] = useState(false)

  useEffect(() => {
    if (id) {
      getPhotoById(id)
        .then((data) => setPhoto(data))
        .catch(() => navigate("/")) // go back if invalid
    }
  }, [id])

  if (!photo) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Loading...</div>

  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Top Bar */}
      <div className="absolute top-0 w-full flex justify-between items-center p-3 sm:p-4 bg-black bg-opacity-70 z-10">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="flex gap-3 items-center">
          <Info className="w-5 h-5 cursor-pointer" onClick={() => setInfoOpen(true)} />
          <Star className="w-5 h-5 opacity-60" />
          <Trash2 className="w-5 h-5 opacity-60" />
          <MoreVertical className="w-5 h-5 opacity-60" />
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center min-h-screen">
        <img
          src={photo.url}
          alt="Photo"
          className="max-w-full max-h-screen object-contain"
        />
      </div>

      {/* Info Modal */}
      {photo && (
        <InfoModal
          open={infoOpen}
          onClose={() => setInfoOpen(false)}
          metadata={{
            size: photo.metadata?.size,
            width: photo.metadata?.width,
            height: photo.metadata?.height,
            format: photo.metadata?.format,
            createdAt: photo.createdAt,
          }}
        />
      )}
    </div>
  )
}
