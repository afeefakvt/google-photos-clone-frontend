"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import StorageWarning from "@/components/StorageWarning"
import AlbumPhotos from "@/components/AlbumPhotoGrid"
import { useParams } from "react-router-dom"

export default function AlbumPhotosPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {albumId} = useParams<{albumId:string}>()  

  return (
    <div className="min-h-screen bg-[#202124] text-white overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-3 sm:p-4 lg:p-6 min-w-0">
          <StorageWarning />
          {albumId && <AlbumPhotos albumId = {albumId}/>}
        </main>
      </div>
    </div>
  )
}
