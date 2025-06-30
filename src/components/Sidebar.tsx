"use client"

import { useLocation, useNavigate } from "react-router-dom"
import { Bell, Star, Users, HardDrive } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 sm:w-72 bg-[#202124] border-r border-gray-700 transition-transform duration-300 ease-in-out`}
      >
        
        <div className="h-screen flex flex-col justify-between">
          <div>
            <div className="p-3 sm:p-4 space-y-1">
          <Button
                variant="ghost"
                className={`w-full justify-start text-sm ${
                  isActive("/home")
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => navigate("/home")}
              >
                <div className="w-4 h-4 mr-3 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Photos
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm"
              >
                <Bell className="w-4 h-4 mr-3" />
                Updates
                <div className="ml-auto w-2 h-2 bg-red-500 rounded-full"></div>
              </Button>
            </div>

            <div className="px-3 sm:px-4 py-2">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Collections</h3>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-sm ${
                    isActive("/albums")
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => navigate("/albums")}
                >
                  <div className="w-4 h-4 mr-3 bg-gray-600 rounded-full"></div>
                  Albums
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm"
                >
                  <div className="w-4 h-4 mr-3 bg-gray-600 rounded-full"></div>
                  Documents
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm"
                >
                  <div className="w-4 h-4 mr-3 bg-gray-600 rounded-full"></div>
                  Screenshots and recordings
                </Button>
              </div>
            </div>

            <div className="px-3 sm:px-4 py-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm"
              >
                <Star className="w-4 h-4 mr-3" />
                Favourites
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm"
              >
                <Users className="w-4 h-4 mr-3" />
                People and pets
              </Button>
            </div>

            <div className="px-3 sm:px-4 py-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:bg-gray-700 text-sm"
              >
                <HardDrive className="w-4 h-4 mr-3" />
                Storage
              </Button>

              <div className="mt-2 px-2 sm:px-3">
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div className="bg-yellow-500 h-1 rounded-full" style={{ width: "80%" }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">12.1 GB of 15 GB used</p>
                <Button
                  variant="outline"
                  className="w-full mt-2 sm:mt-3 bg-transparent border border-gray-600 text-white hover:bg-gray-700 text-xs sm:text-sm py-1 sm:py-2"
                >
                  Start 100 GB trial
                </Button>
              </div>
            </div>
          </div>

          <div className="px-3 sm:px-4 py-4 text-xs text-gray-400 flex gap-4 border-t border-gray-700">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Policy</span>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  )
}
