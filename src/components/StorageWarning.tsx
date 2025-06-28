"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function StorageWarning() {
  return (
    <div className="bg-[#303134] border border-gray-600 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-black text-xs font-bold">!</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs sm:text-sm">
            <span>Account storage is 80% full. </span>
            <button className="text-blue-400 underline">Start 100 GB trial</button>
            <span> or </span>
            <button className="text-blue-400 underline">manage storage</button>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:bg-gray-700 p-1 flex-shrink-0">
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  )
}