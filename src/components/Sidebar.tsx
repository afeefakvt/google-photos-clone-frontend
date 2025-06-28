"use client"

import { Button } from "@/components/ui/button"
import { Bell, Star, Users, HardDrive } from "lucide-react"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 sm:w-72 lg:w-64 bg-[#202124] border-r border-gray-700 transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="p-3 sm:p-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white text-sm">
            <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 bg-white/20 rounded flex items-center justify-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-sm"></div>
            </div>
            Photos
          </Button>

          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Updates
            <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
          </Button>
        </div>

        <div className="px-3 sm:px-4 py-2">
          <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-2">Collections</h3>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 bg-gray-600 rounded"></div>
              Albums
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 bg-gray-600 rounded"></div>
              Documents
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 bg-gray-600 rounded"></div>
              Screenshots and recordings
            </Button>
          </div>
        </div>

        <div className="px-3 sm:px-4 py-2">
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Favourites
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            People and pets
          </Button>
        </div>

        <div className="px-3 sm:px-4 py-2 mt-4 sm:mt-8">
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm">
            <HardDrive className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Storage
          </Button>
          <div className="mt-2 px-2 sm:px-3">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div className="bg-yellow-500 h-1 rounded-full" style={{ width: "80%" }}></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">12.1 GB of 15 GB used</p>
            <Button
              variant="outline"
              className="w-full mt-2 sm:mt-3 bg-transparent border-gray-600 text-white hover:bg-gray-700 text-xs sm:text-sm py-1 sm:py-2"
            >
              Start 100 GB trial
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 left-3 sm:left-4 right-3 sm:right-4">
          <div className="flex gap-3 sm:gap-4 text-xs text-gray-400">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Policy</span>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  )
}