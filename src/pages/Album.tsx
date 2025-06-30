"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { getUserAlbums } from "@/api/album"
import type { Album } from "@/api/album"
import { useNavigate } from "react-router-dom"

export default function AlbumsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [albums, setAlbums] = useState<Album[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await getUserAlbums()
        setAlbums(res)
      } catch (err) {
        console.error("Failed to fetch albums", err)
      }
    }

    fetchAlbums()
  }, [])

  return (
    <div className="min-h-screen bg-[#202124] text-white overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-3 sm:p-4 lg:p-6 min-w-0">
          <h2 className="text-xl sm:text-2xl font-normal mb-6"> Albums</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {albums.map((album) => (
              <div
                key={album._id}
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition"
                onClick={() => navigate(`/albums/${album._id}`)}
              >
                <div className="aspect-square bg-gray-700 flex items-center justify-center">
                  {album.coverUrl ? (
                    <img src={album.coverUrl} alt={album.title} className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-gray-400 text-sm">No Cover</span>
                  )}
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-medium truncate">{album.title}</h3>
                  <p className="text-xs text-gray-400">{album.photos.length} photos</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
